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




// export default function CommentsList({ mainVideo }) {
//     const commentsList = mainVideo.comments.map((comment) => {
//       return (
//         <ul id="comments-list" className="comments-list" key={comment.id}>
//           <div className="comments-list__top-row">
//             <div className="comments-list__image-wrapper">
//               <li className="comments-list__item">
//                 <img
//                   className="comments-list__image"
//                   src={profileGrey}
//                   alt="User Display"
//                 />
//               </li>
//             </div>
//             <div className="comments-list__name-wrapper">
//               <li className="comments-list__item">
//                 <h2 className="comments-list__name">{comment.name}</h2>
//               </li>
//             </div>
//             <div className="comments-list__date-wrapper">
//               <li className="comments-list__item">
//                 <h4 className="comments-list__date">{comment.timestamp}</h4>
//               </li>
//             </div>
//           </div>
//           <div className="comments-list__content-wrapper">
//             <li className="comments-list__item">
//               <span className="comments-list__content">{comment.comment}</span>
//             </li>
//           </div>
//         </ul>
//       );
//     });
//     return (
//       <section className="default-comments">
//         <div className="default-comments">{commentsList}</div>
//       </section>
//     );