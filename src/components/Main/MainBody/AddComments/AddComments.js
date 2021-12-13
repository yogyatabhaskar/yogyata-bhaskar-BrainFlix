import React, { Component } from "react";
import "./AddComments.scss";

export default class AddComments extends Component {
  render() {
    return (
      <div className="comment-list">
        <div className="comment-list__thumbnail"></div>
        <div className="comment-list__post">
          <div className="comment-list__commentbox">
            <p className="comment-list__name">{this.props.name}</p>
            <p className="comment-list__date">{Date(this.props.timestamp)}</p>
            {/* new Date(props.timestamp).toLocaleDateString() */}
          </div>

          <p className="comment-list__comment">{this.props.comment}</p>
        </div>
      </div>
    );
  }
}
