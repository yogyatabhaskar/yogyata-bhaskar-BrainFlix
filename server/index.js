const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const videoRoutes = require ('./routes/videos')

const URL = "https://project-2-api.herokuapp.com";
const API = "56330613-0c78-4cad-8d8e-76d05748270e";

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8080;


// Middleware
app.use(cors());
app.use(express.json());
app.use('/static-files', express.static('files'));


// Include the video routes in our server
app.use('/videos', videoRoutes);



// PROXY to be checked later

// const axios = require('axios');
// app.get('/my-proxy', (_req, res) => {
//     axios.get(`${URL}?api_key=${API}`)
//         .then((response) => {
//             res.send(response.data);
//         });
// });

// Start the server
app.listen(port, () => {
    console.log('App listening on port ' + port); 
});