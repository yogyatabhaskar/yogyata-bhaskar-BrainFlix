import "./AddComments.scss";
import React from 'react';

export default class Comments extends React.Component {
    render () {
        return(
            this.props.CommentData.map( (item)=> {
              const dateElem = new Date(item.timestamp);
                const dateElement = dateElem.toLocaleDateString();
                return (
                    <section className="comment-list" key={item.id}>
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






// class AddComm extends React.Component ({selectedVideo}) {
//     render () {
//         return(
//             selectedVideo.map( (item)=> {
//                 return (
//                     <section className="comments" key={item.id}>
//                         <img className="comment-list__thumbnail" alt=""></img>
//                         <div className="comment-list__post">
//                             <div className="comment-list__commentbox">
//                                 <p className="comment-list__name">{item.name}</p>
//                                 <p className="comment-list__date">{item.date}</p>
//                             </div>
//                             <p className="comment-list__comment">{item.comment}</p>
//                         </div>
//                     </section>
//                 )
//             })
//         )
//     }
// }
    
// export default AddComm;