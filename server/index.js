const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const uniqid = require('uniqid');

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8080;


// Middleware
app.use(cors());
app.use(express.json());

// Function to read videos data
function readVideos() {
    const videosFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosFile);
    return readVideos;
}

// Function to write videos data
function writeVideos(data) {
    fs.writeFileSync('./data/videos.json', JSON.stringify(data));
}

// Routes

// Start the server
app.listen(port, () => {
    console.log('App listening on port ' + port); 
});