import "./AddComments.scss";
import AddComm from "./AddComm";

export default function AddComments({ selectedVideo }) {
  return (
    <div className="comment-list">
      {selectedVideo.map((selectedVid) => (
       

          <AddComm
            key={selectedVid.id}
            id={selectedVid.id}
            name={selectedVid.name}
            // ts={generateTimeStamp(comment.timestamp)}
            comment={selectedVid.comment}
          />
      ))
      }
      
    </div>
  )};


// export default function AddComments({ selectedVideo }) {
//   return (
//     <div className="comment-list">
//       {selectedVideo.map((vid) => (
//         <AddComm key={vid.id} name={vid.name} comment={vid.comment} />
//       ))}
//     </div>
//   );
// }

// <div className="comment-list__thumbnail"></div>
//       <div className="comment-list__post">
//         <div className="comment-list__commentbox">
//           <p className="comment-list__name">{addedcomment.name}</p>
//           <p className="comment-list__date">{addedcomment.date}</p>
//         </div>

//         <p className="comment-list__comment">{addedcomment.comment}</p>
//       </div>

// const dateElem = new Date(video.timestamp);
// const dateElement = dateElem.toLocaleDateString();
