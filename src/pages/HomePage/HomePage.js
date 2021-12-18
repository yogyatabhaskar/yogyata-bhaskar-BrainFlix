import { Component } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Hero from "../../components/Main/Hero/Hero";
import Description from "../../components/Main/Description/Description";
// import AddComments from "../../components/Main/Description/AddComments/AddComments"
import VideoRecommendation from "../../components/Main/VideoSec/VideoSec";
import "../../components/Main/Main.scss";

class HomePage extends Component {
  state = {
    videos: [],
    selectedVideo: {}, 
    isError: false,
  };

  getSpecificVideo = (id) => {
    if (id) {
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
          });
        })
        .catch(() => {
          this.setState({
            isError: true,
          });
        });
    } else {
      axios
        .get(
          "https://project-2-api.herokuapp.com/videos?api_key=56330613-0c78-4cad-8d8e-76d05748270e"
        )
        .then((response) => {
          // console.log(response);
          const firstVideoId = response.data[0].id;
          return axios.get(
            "https://project-2-api.herokuapp.com/videos/" +
              firstVideoId +
              "?api_key=56330613-0c78-4cad-8d8e-76d05748270e"
          );
        })
        .then((response) => {
          console.log(response.data);
          this.setState({
            selectedVideo: response.data,
          });
        });
    }
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

    const videoId = this.props.match.params.videoId;
    console.log(this.props);
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
    // console.log(this.state.selectedVideo.comments)
    return (
      <div className="video-page">
        <Header />

        <div className="home-page">
          <Hero selectedVideo={this.state.selectedVideo} />

          <div className="home-page__section">
            <div className="home-page__description">
              <Description selectedVideo={this.state.selectedVideo} />
            </div>

            {/* <div className="home-page__posted">
            <AddComments selectedVideo={this.state.selectedVideo.comments}/>
            </div> */}

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
