import { Component } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Hero from "../../components/Main/Hero/Hero";
import Description from "../../components/Main/Description/Description";
import Comments from "../../components/Main/Description/AddComments/AddComments"
import VideoRecommendation from "../../components/Main/VideoSec/VideoSec";
import "../../components/Main/Main.scss";

class HomePage extends Component {
  state = {
    videos: [],
    selectedVideo: {}, 
    CommentData:[]
  };

  getSpecificVideo = (id) => {
      axios
        .get(
          "https://project-2-api.herokuapp.com/videos/" +
            id +
            "?api_key=56330613-0c78-4cad-8d8e-76d05748270e"
        )
        .then((response) => {
          //   console.log(response.data);
          this.setState({
            selectedVideo: response.data,
            CommentData: response.data.comments
          });
        })
        .catch (error => {
          console.log('this is the problem')
      })
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=56330613-0c78-4cad-8d8e-76d05748270e"
      )
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

  render() {
    const filterVideo = this.state.videos;
    console.log("rendered");
    return (
      <div className="video-page">
        <Header />

        <div className="home-page">
          <Hero selectedVideo={this.state.selectedVideo} />

          <div className="home-page__section">
            <div className="home-page__description">
              <Description selectedVideo={this.state.selectedVideo} />
            </div>

            <div className="home-page__posted">
            <Comments CommentData={this.state.CommentData}/>

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
