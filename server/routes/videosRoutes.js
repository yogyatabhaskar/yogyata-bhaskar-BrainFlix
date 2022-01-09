const express = require("express");
const router = express.Router();
const videoController = require('../controllers/videoController');

// Routes
router.get("/", videoController.getAll);
router.get("/:id", videoController.getOne);
router.post("/", videoController.createOne);

module.exports = router;
