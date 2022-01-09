const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const videoRoutes = require ('./routes/videosRoutes')

const URL = "https://project-2-api.herokuapp.com";
const API = "56330613-0c78-4cad-8d8e-76d05748270e";

require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/static-files', express.static('files'));
app.use( '/public/images/',express.static( "public" ) );

app.use('/videos', videoRoutes);

app.listen(port, () => {console.log('App listening on port ' + port); });