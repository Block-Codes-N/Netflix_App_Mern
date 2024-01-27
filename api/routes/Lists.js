// Importing the Express router module
const router = require("express").Router();
// Importing the Movie model for database operations
const List = require("../models/List");
// Importing the verifyToken middleware for authentication
const verify = require("../verifyToken");

// CREATE endpoints for handling POST requests to Create a list
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
        const savedList = await newList.save();
        res.status(201).json(savedList);
    } catch (err) {
        res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});


// DELETE endpoints for handling DELETE requests to delete a list
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await List.findByIdAndDelete(req.params.id);                                                                                                                                    
          res.status(201).json("List has been deleted");
      } catch (err) {
          res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });


  // Get endpoints for handling Get requests
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

    try {
      if(typeQuery){
        if(genreQuery){
          list = await List.aggregate([{$sample: {size: 10}},{$match: {type: typeQuery, genre: genreQuery}}])
        }
        else{
          list = await List.aggregate([{$sample: {size: 10}},{$match: {type: typeQuery}}])
        }
      }else{
        list = await List.aggregate([{$sample: {size: 10}}])
      }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;