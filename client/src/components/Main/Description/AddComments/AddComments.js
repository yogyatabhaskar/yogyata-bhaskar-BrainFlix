import "./AddComments.scss";
import React from 'react';

export default class Comments extends React.Component {
    render () {
        return(
            this.props.CommentData.map( (item)=> {
              const dateElem = new Date(item.timestamp);
                const dateElement = dateElem.toLocaleDateString();
                return (
                    <section className="comment-list" key={item.timestamp}>
                        <div className="comment-list__thumbnail"></div>
                        <div className="comment-list__post">
                            <div className="comment-list__commentbox">
                                <p className="comment-list__name">{item.name}</p>
                                <p className="comment-list__date">{dateElement}</p>
                            </div>
                            <p className="comment-list__comment">{item.comment}</p>
                        </div>
                    </section>
                )
            })
        )
    }
}