const videoModel = require("../models/videoModel");

const getAll = (req, res) => {
  const videos = videoModel.getAll();
  res.json(videos);
};

const getOne = (req, res) => {
  const videoid  = req.params.id;
  const singleVideo = videoModel.getById({videoid});

  if (!singleVideo) {
    return res.status(404).send("Video not found with id " + videoid);
  }
  res.json(singleVideo);
};

const createOne = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send("Title is required");
  }

  if (!req.body.description) {
    return res.status(400).send("Description is reqiured");
  }

  const newVideo = videoModel.createOne({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  res.status(201).json(newVideo);
};

module.exports = {
  getAll,
  getOne,
  createOne,
};
