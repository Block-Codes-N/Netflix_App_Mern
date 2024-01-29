// Importing required modules and setting up the Express router
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

// UPDATE: Handles the endpoint for updating user information
router.put("/:id", verify, async (req, res) => {
  // Checking if the user making the request is the owner or an admin
  if (req.user.id === req.params.id || req.user.isAdmin) {
    // Encrypting the password using AES if provided in the request body
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      // Updating the user information and returning the updated user
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      // Handling any errors that may occur during the update process
      res.status(500).json(err);
    }
  } else {
    // Responding with a forbidden status if the user is not authorized to update the account
    res.status(403).json("You can update only your account!");
  }
});

// DELETE: Handles the endpoint for deleting a user
router.delete("/:id", verify, async (req, res) => {
  // Checking if the user making the request is the owner or an admin
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      // Deleting the user and responding with a success message
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("User has been Deleted ......");
    } catch (err) {
      // Handling any errors that may occur during the delete process
      res.status(500).json(err);
    }
  } else {
    // Responding with a forbidden status if the user is not authorized to delete the account
    res.status(403).json("You can delete only your account!");
  }
});

// GET: Handles the endpoint for retrieving a specific user by ID
router.get("/find/:id", async (req, res) => {
  try {
    // Finding the user by ID, excluding the password, and responding with user information
    const user = await User.findById(req.params.id)
    const {password, ...info} = user._doc; 
    res.status(200).json(info);
  } catch (err) {
    // Handling any errors that may occur during the retrieval process
    res.status(500).json(err);
  }
});

// GET ALL: Handles the endpoint for retrieving all users (with optional query for new users)
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  // Checking if the user making the request is an admin
  if (req.user.isAdmin) {
    try {
      // Retrieving all users, optionally sorting by creation date and limiting to the latest 10
      const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
      res.status(200).json(users);
    } catch (err) {
      // Handling any errors that may occur during the retrieval process
      res.status(500).json(err);
    }
  } else {
    // Responding with a forbidden status if the user is not authorized to view all users
    res.status(403).json("You are not allowed to see all users!");
  }
});

// GET USER STATS: Handles the endpoint for retrieving user statistics
router.get("/stats", async (req, res) => {
  const today = new Date();
  const lstYear = today.setFullYear(today.setFullYear() - 1);

  try {
    // Aggregating user data to get statistics on user creation per month
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    // Handling any errors that may occur during the statistics retrieval process
    res.status(500).json(err);
  }
});

// Exporting the router for use in other parts of the application
module.exports = router;



