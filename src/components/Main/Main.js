import "./Main.scss";
import Hero from './Hero/Hero';
import MainBody from './MainBody/MainBody';
import videoDetailsData from '../../data/video-details.json';
import AddComments from './MainBody/AddComments/AddComments'
import videosData from '../../data/videos.json';
import { Component } from 'react';
import VideoRecommendation from './VideoSec/VideoSec';


class Body extends Component {
    state = {
      videos: videosData,
      selectedVideo: videoDetailsData[0]
    }

    render() {
  
      return(
        <div className="home-page">
          <Hero selectedVideo={this.state.selectedVideo}/>
          <div className="home-page__description">
            <MainBody selectedVideo={this.state.selectedVideo} /> 
            {this.state.selectedVideo.comments.map((article) => {
              return <AddComments key={article.id} 
              name={article.name} 
              date={article.timestamp} 
              comment={article.comment}/>;
            })}
          
          </div>
          
          <div className="home-page__recommendations">
            {this.state.videos.map((video) => {
              return <VideoRecommendation key={video.id} 
              image={video.image} 
              title={video.title} 
              channel={video.channel}/>;
            })}
  
          </div>
           
            
        </div>
      );
    }
  }

export default Body;