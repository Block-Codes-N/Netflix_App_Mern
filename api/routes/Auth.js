// Importing the 'Router' module from the 'express' library
const router = require('express').Router();

// Importing the 'User' model from the '../models/User' file
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Importing the 'CryptoJS' library for encrypting and decrypting data
const CryptoJS = require("crypto-js");

// Handling the registration endpoint
router.post('/register', async(req, res) => {
    // Creating a new User instance with data from the request body
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // Encrypting the password using AES encryption with a secret key
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });

    try {
        // Saving the new user to the database
        const user = await newUser.save();
        // Sending a successful response with the created user data
        res.status(201).json(user);
    } catch (err) {
        // Handling any errors that occur during the registration process
        res.status(500).json(err);
    }
});

// Handling the login endpoint
// router.post('/login', async(req, res) => {
//     try {
//         // Finding a user with the provided email in the database
//         const user = await User.findOne({email: req.body.email});
//         // Handling the case where no user is found with the provided email
//         !user && res.status(401).json("Wrong password or Username");

//         // Decrypting the stored password using the secret key
//         const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
//         const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

//         // Comparing the decrypted password with the password from the request body
//         originalPassword !== req.body.password && res.status(401).json("Wrong Password or Username!")

//         const accessToken = jwt.sign(
//             {id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY,{expiresIn: "5d"}
//         ); 
//         // Extracting password from user data and creating a new object without the password
//         const {password, ...info} = user._doc; 
//         // Sending a successful response with user data (excluding password)
//         res.status(200).json({ ...info, accessToken});
//     } catch (err) {
//         // Handling any errors that occur during the login process
//         res.status(500).json(err);
//     }
// });


router.post('/login', async (req, res) => {
    try {
        // Finding a user with the provided email in the database
        const user = await User.findOne({ email: req.body.email });

        // Handling the case where no user is found with the provided email
        if (!user) {
            return res.status(401).json("Wrong password or Username");
        }

        // Decrypting the stored password using the secret key
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        // Comparing the decrypted password with the password from the request body
        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong Password or Username!");
        }

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
        );

        // Extracting password from user data and creating a new object without the password
        const { password, ...info } = user._doc;

        // Sending a successful response with user data (excluding password)
        res.status(200).json({ ...info, accessToken });
    } catch (err) {
        // Handling any errors that occur during the login process
        console.error("Error during login:", err);

        res.status(500).json(err);
    }
});

// Exporting the router for use in other parts of the application
module.exports = router;