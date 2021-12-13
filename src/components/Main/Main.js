import "./Main.scss";
import Hero from "./Hero/Hero";
import MainBody from "./MainBody/MainBody";
import videoDetailsData from "../../data/video-details.json";
import AddComments from "./MainBody/AddComments/AddComments";
import videosData from "../../data/videos.json";
import { Component } from "react";
import VideoRecommendation from "./VideoSec/VideoSec";

class Body extends Component {
  state = {
    videos: videosData,
    selectedVideo: videoDetailsData[0],
  }
    handleSelectPlant = (clickId) => {
      const findVideo = videoDetailsData.find((video)=> clickId ===video.id);
      this.setState({
        selectedVideo: findVideo
        });
  };

  render() {
    const filterVideo = this.state.videos.filter((video) => video.id !== this.state.selectedVideo.id);

    return (
      <div className="home-page">
        <Hero selectedVideo={this.state.selectedVideo} />
        <div className="home-page__section">
          <div className="home-page__description">
            <MainBody selectedVideo={this.state.selectedVideo} />
            <div className="home-page__posted">
            {this.state.selectedVideo.comments.map((article) => {
              return (
                <AddComments
                  key={article.id}
                  name={article.name}
                  date={article.timestamp}
                  comment={article.comment}
                />
              );
            })}
            </div>
            
          </div>

          <div className="recommendations">
          <p className="recommendations__header">NEXT VIDEO</p>
       
            {this.state.videos.map((video) => {
              return (
                <VideoRecommendation
                  key={video.id}
                  image={video.image}
                  title={video.title}
                  channel={video.channel}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
