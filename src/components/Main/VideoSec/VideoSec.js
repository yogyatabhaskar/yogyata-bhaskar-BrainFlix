import React, { Component } from "react";
import "./VideoSec.scss";

export default class VideoRecommendation extends Component {
  render() {
    return (
      <div className="video-recommendation">
          
        <img
          className="video-recommendation__pic"
          src={this.props.image}
          alt="video-thumbnail-img"
        />

        <div className="video-recommendation__details">
          <p classname="video-recommendation__title">{this.props.title}</p>
          <p classname="video-recommendation__channel">{this.props.channel}</p>
        </div>
      </div>
    );
  }
}
