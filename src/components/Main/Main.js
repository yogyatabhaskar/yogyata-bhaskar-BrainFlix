import "./Main.scss";
import Hero from "./Hero/Hero";
import Description from "./Description/Description";
import videoDetailsData from "../../data/video-details.json";
import AddComments from "./Description/AddComments/AddComments";
import videosData from "../../data/videos.json";
import { Component } from "react";
import VideoRecommendation from "./VideoSec/VideoSec";

class Body extends Component {
  state = {
    videos: videosData,
    selectedVideo: videoDetailsData[0],
  };
  handleSelectVideo = (clickId) => {
    const findVideo = videoDetailsData.find((video) => clickId === video.id);
    this.setState({
      selectedVideo: findVideo,
    });
  };

  render() {
    const filterVideo = this.state.videos.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );
    console.log(filterVideo);

    return (
   
        
            
            <div className="home-page__posted">
              
              {this.state.selectedVideo.comments.map((article) => {
                const dateElem = new Date(article.timestamp);
                const dateElement = dateElem.toLocaleDateString();

                return (
                  <AddComments
                    key={article.id}
                    name={article.name}
                    date={dateElement}
                    comment={article.comment}
                  />
                );
              })}
            </div>
      

          
        
     
    );
  }
}

export default Body;
