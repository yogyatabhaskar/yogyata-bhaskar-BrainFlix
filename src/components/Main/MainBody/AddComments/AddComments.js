import React, { Component } from "react";
import mohan from '../../../../assets/Images/Mohan-muruge.jpg';
import './AddComments.scss';

export default class AddComments extends Component {
    render() {
        return (
            <div className="comment-list">
                <img className="comment-list__thumbnail" src={mohan} alt="grey-thumbnail"/>
                 
                <div className="comment-list__commentbox">
                    <p className="comment-list__name">{this.props.name}</p>
                    <p className="comment-list__date">{Date(this.props.timestamp)}</p> 
                    {/* new Date(props.timestamp).toLocaleDateString() */}
                </div>

                <p className="comment-list__comment">{this.props.comment}</p>
            </div>
        );
    }
}