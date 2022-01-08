const fs = require("fs");
const uniqid = require("uniqid");

// Function to read videos data
function readVideos() {
  const videosFile = fs.readFileSync("./data/videos.json");
  const videosData = JSON.parse(videosFile);
  return videosData;
}

// Function to write videos data
function writeVideos(data) {
  fs.writeFileSync("./data/videos.json", JSON.stringify(data));
}

const getAll = (req, res) => {
  const videos = readVideos();
  res.send(videos);
};

const getOne = (req, res) => {
  // Read the file
  const videos = readVideos();
  console.log(req.params.id);
  // Find the single video whose id matches the requested id
  const singleVideo = videos.find((video) => video.id === req.params.id);

  // This would be good place to check if the note was found 👀
  if (!singleVideo) {
    return res.status(404).send("Video not found");
  }

  // Respond with the single note
  res.json(singleVideo);
};

const createOne = (req, res) => {
    // Make a new video with a unique ID
    console.log("hey");
    console.log(req.body);
    const newVideo = {
      id: uniqid(),
      title: req.body.title,
      channel: "My Channel",
      image: req.body.image,
      description: req.body.description,
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
  
    // Insert that videos into our data...
    // 1. Read the current videos array
    // 2. Add to the videos array
    // 3. Write the entire new videos array to the file
    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videos));
  
    // Respond with the video that was created
    res.status(201).json(newVideo);
  }

module.exports = {
  getAll,
  getOne,
  createOne
};
