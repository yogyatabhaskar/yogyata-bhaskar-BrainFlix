const express = require("express");
const router = express.Router();
const videoController = require('../controllers/videoController');



// Routes
// GET /videos route
router.get("/", videoController.getAll );

// GET endpoint for an individual video
router.get("/:id", videoController.getOne);

// POST endpoint to add a video
router.post("/", videoController.createOne);

module.exports = router;
