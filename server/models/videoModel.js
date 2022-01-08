const fs = require("fs");
const uniqid = require("uniqid");
const filePath = "./data/videos.json";

// Function to read videos data
function readVideos() {
  const videosFile = fs.readFileSync(filePath);
  const videosData = JSON.parse(videosFile);
  return videosData;
}

// Function to write videos data
function writeVideos(data) {
  fs.writeFileSync(filePath, JSON.stringify(data));
}

//Model functions
const getAll = () => {
  return readVideos();
};

const getById = ({ videoid }) => {
  const videos = readVideos();
  return singleVideo = videos.find((video) => videoid === video.id);
   
};

const createOne = ({ title, description, image }) => {
  const videos = readVideos();

  const newVideo = {
    id: uniqid(),
    title,
    channel: "My Channel",
    image,
    description,
    views: "23748755",
    likes: "7247236",
    duration: "7:42",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: "1631532321000",
    comments: [
      {
        name: "Amy Miller",
        comment:
          "Location location location! It blows my mind how many people don’t understand this, but you’ve summed it up so well here. The next time I travel, I’ll be on the beachfront.",
        likes: 16,
        timestamp: 1631816495000,
      },
      {
        name: "Suzie Chan",
        comment:
          "I wish I could print out a video to show to my travel agent. Oh, what am I saying – they have a computer! Much appreciated advice, I can’t wait to put it into action soon.",
        likes: 12,
        timestamp: 1631799181000,
      },
      {
        name: "Alasie Rivers",
        comment:
          "From five-star hotels to the cheapest spots – wherever you like to stay, THIS is the way to do it! I’ll take sunlight and a cozy reading corner over a pool any day of the week.",
        likes: 10,
        timestamp: 1631716921000,
      },
    ],
  };

  videos.push(newVideo);
  writeVideos(videos);
  return newVideo;
};

module.exports = {
  getAll,
  getById,
  createOne,
};
