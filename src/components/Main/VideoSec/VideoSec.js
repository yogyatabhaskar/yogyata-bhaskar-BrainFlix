import "./VideoSec.scss";
import { Link } from "react-router-dom";
import { Component } from "react";

class VideoRecommendation extends Component {
  render() {
    return (
      <div className="video-recommendation">
        <div>
          <p className="video-recommendation__header">NEXT VIDEO</p>
        </div>

        <div className="video-recommendation__container">
          {this.props.videos.map((video) => {
            return (
              <Link to={"/videos/" + video.id} key={video.id} className="video-recommendation__button">
                <div className="video-recommendation__arrange">
                  <img
                    className="video-recommendation__pic"
                    src={video.image}
                    alt={video.title}
                  />
                </div>
                <div className="video-recommendation__details">
                  <p className="video-recommendation__title">{video.title}</p>
                  <p className="video-recommendation__channel">
                    {video.channel}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VideoRecommendation;
