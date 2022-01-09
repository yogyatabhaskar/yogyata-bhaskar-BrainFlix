import { Component } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Hero from "../../components/Main/Hero/Hero";
import Description from "../../components/Main/Description/Description";
import Comments from "../../components/Main/Description/AddComments/AddComments";
import VideoRecommendation from "../../components/Main/VideoSec/VideoSec";
import "./HomePage.scss";

// const Url = "https://project-2-api.herokuapp.com/videos/";
// const API = "56330613-0c78-4cad-8d8e-76d05748270e";

class HomePage extends Component {
  state = {
    videos: [],
    selectedVideo: {},
    CommentData: [],
  };

  getSpecificVideo = (id) => {
    if (id) {
      axios
        // .get(Url + id + `?api_key=${API}`)
        .get(process.env.REACT_APP_API_URL+`/videos` + id)
        .then((response) => {
          this.setState({
            selectedVideo: response.data,
            CommentData: response.data.comments,
          });
        })
        .catch((error) => {
          console.log("this is the problem");
        });
    } else {
      axios
        .get(process.env.REACT_APP_API_URL+`/videos`)
        .then((response) => {
          const firstVideoId = response.data[0].id;
          return axios.get(process.env.REACT_APP_API_URL+`/videos` + firstVideoId);
        })
        .then((response) => {
          console.log(response.data);
          this.setState({
            selectedPlant: response.data,
            CommentData: response.data.comments,
          });
        });
    }
  };

  componentDidMount() {
    axios
    .get(process.env.REACT_APP_API_URL+`/videos`)
    .then((response) => {
      console.log("mounted");
      console.log(response.data);
      this.setState({
        videos: response.data,
      });
    });

    const videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
    this.getSpecificVideo(videoId);
  }

  componentDidUpdate(prevProps) {
    const videoId = this.props.match.params.videoId;
    console.log("updated");

    if (videoId !== prevProps.match.params.videoId) {
      this.getSpecificVideo(videoId);
    }
  }

addComment = ((event) =>{
  event.preventDefault();
  axios
  .post(process.env.REACT_APP_API_URL+`/videos/:videoId/comments`, {
    name: event.target.name.value,
    comment: event.target.comment.value
  })
  .then(res=> {
    console.log(res.data)
  });

})  

  render() {
    const filterVideo = this.state.videos.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );
    console.log("rendered");
    console.log(filterVideo);
    return (
      <div className="video-page">
        <Header />

        <div className="home-page">
          <Hero selectedVideo={this.state.selectedVideo} />

          <div className="home-page__section">
            <div className="home-page__description">
              <Description
                selectedVideo={this.state.selectedVideo}
                CommentData={this.state.CommentData}
              />
              <div className="home-page__posted">
                <Comments CommentData={this.state.CommentData} addComment={this.addComment} />
              </div>
            </div>

            <div className="recommendations">
              <VideoRecommendation videos={filterVideo} />
            </div>
          </div>
        </div>
        {this.state.isError && "The video was not found"}
      </div>
    );
  }
}

export default HomePage;
