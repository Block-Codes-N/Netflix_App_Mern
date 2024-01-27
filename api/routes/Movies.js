// Importing the Express router module
const router = require("express").Router();
// Importing the Movie model for database operations
const Movie = require("../models/Movie");
// Importing the verifyToken middleware for authentication
const verify = require("../verifyToken");

// CREATE endpoints for handling POST requests to Create a movie
router.post("/", verify, async (req, res) => {
  // Checking if the user making the request is an admin
  if (req.user.isAdmin) {
    // Creating a new Movie instance with the request body data
    const newMovie = new Movie(req.body);
    try {
        // Attempting to save the new movie data to the database
        const savedMovie = await newMovie.save();
        // Responding with a success status (201) and the saved movie data
        res.status(201).json(savedMovie);
    } catch (err) {
        // If an error occurs during the database operation, respond with a server error (500) and the error message
        res.status(500).json(err);
    }
  } else {
    // If the user is not an admin, respond with a forbidden status (403) and a message
    res.status(403).json("You are not allowed!");
  }
});


// UPDATE endpoints for handling PUT requests to update a movie
router.put("/:id", verify, async (req, res) => {
    // Checking if the user making the request is an admin
    if (req.user.isAdmin) {
          
      try {
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, 
            {$set: req.body,}, {new: true});
          // Responding with a success status (201) and the saved movie data
          res.status(200).json(updateMovie);
      } catch (err) {
          // If an error occurs during the database operation, respond with a server error (500) and the error message
          res.status(500).json(err);
      }
    } else {
      // If the user is not an admin, respond with a forbidden status (403) and a message
      res.status(403).json("You are not allowed!");
    }
  });


// DELETE endpoints for handling DELETE requests to delete a movie
router.delete("/:id", verify, async (req, res) => {
    // Checking if the user making the request is an admin
    if (req.user.isAdmin) {
          
      try {
        await Movie.findByIdAndUpdate(req.params.id)
          // Responding with a success status (201) and the saved movie data
          res.status(200).json("The movie has been deleted");
      } catch (err) {
          // If an error occurs during the database operation, respond with a server error (500) and the error message
          res.status(500).json(err);
      }
    } else {
      // If the user is not an admin, respond with a forbidden status (403) and a message
      res.status(403).json("You are not allowed!");
    }
  });

  // GET endpoints for handling Play requests to display a movie
router.get("/find/:id", verify, async (req, res) => {
   
      try {
        const  movie = await Movie.findById(req.params.id)
          // Responding with a success status (200) and the saved movie data
          res.status(200).json(movie);
      } catch (err) {
          // If an error occurs during the database operation, respond with a server error (500) and the error message
          res.status(500).json(err);
      }
  });

// GET Random movie endpoints
router.get("/random", verify, async (req, res) => {
   const type = req.query.type;
   let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: {isSeries: true}},
                {$sample: { size: 1} },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: {isSeries: false}},
                {$sample: { size: 1} },
            ]);    
        }
        res.status(200).json(movie);

    } catch (err) {
        // If an error occurs during the database operation, respond with a server error (500) and the error message
        res.status(500).json(err);
    }
});

// GET ALL MOVIES endpoints 
router.get("/", verify, async (req, res) => {
    // Checking if the user making the request is an admin
    if (req.user.isAdmin) {
          
      try {
        const movies = await Movie.find()
          // Responding with a success status (201) and the all movies data
          res.status(200).json(movies);  //json(movies.reverse());  For Showing the most recent movies.
      } catch (err) {
          // If an error occurs during the database operation, respond with a server error (500) and the error message
          res.status(500).json(err);
      }
    } else {
      // If the user is not an admin, respond with a forbidden status (403) and a message
      res.status(403).json("You are not allowed!");
    }
  });

// Exporting the router for use in other parts of the application
module.exports = router;