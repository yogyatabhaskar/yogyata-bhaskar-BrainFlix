const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

// Function to read videos data
function readVideos() {
    const videosFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosFile);
    return videosData;
}

// Function to write videos data
function writeVideos(data) {
    fs.writeFileSync('./data/videos.json', JSON.stringify(data));
}

// Routes
// GET /videos route

router.get('/', (req, res) => {
    // Respond with the notes from our data file
    const videos = readVideos();    
    res.send(videos);
});

// GET endpoint for an individual video
router.get('/:id', (req, res) => {
    // Read the file
    const videos = readVideos();
    console.log(req.params.id)
    // Find the single video whose id matches the requested id
    const singleVideo = videos.find((video) => video.id === req.params.id)
    
    // This would be good place to check if the note was found 👀
    if (!singleVideo) {
        return res.status(404).send("Video not found");
    }

    // Respond with the single note
    res.json(singleVideo);
});

// POST endpoint to add a video
router.post("/", (req, res) => {
    // Make a new video with a unique ID
    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: "Placeholder Channel",
        image: req.body.image,
        description: req.body.description,
        views: "Placeholder number",
        likes: "Placeholder likes",
        duration: "Placeholder duration",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: "Placeholder time",
        comments: [
            name="NAME",
            comment= "COMMENT",
            likes= "0",
            timestamp= "TIME"
        ]
    };

    // Insert that note into our data...
    // 1. Read the current notes array
    // 2. Add to the notes array
    // 3. Write the entire new notes array to the file
    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync('./data/videos.json', JSON.stringify(videos));

    // Respond with the note that was created
    res.status(201).json(newVideo);
});


module.exports = router;


