import "./AddComments.scss";
import React from 'react';

export default function AddComm ({name, comment}) {
return(
    <>

        <div className="comment-list__thumbnail"></div>
        <div className="comment-list__post">
          <div className="comment-list__commentbox">
            <p className="comment-list__name">{name}</p>
            {/* <p className="comment-list__date">{video.date}</p> */}
          </div>

          <p className="comment-list__comment">{comment}</p>
        </div>
      </>  
);
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