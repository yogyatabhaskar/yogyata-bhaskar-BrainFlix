import "./AddComments.scss";

export default function Description (addedcomment) {
  
    return (
      <div className="comment-list">
        <div className="comment-list__thumbnail"></div>
        <div className="comment-list__post">
          <div className="comment-list__commentbox">
            <p className="comment-list__name">{addedcomment.name}</p>
            <p className="comment-list__date">{addedcomment.date}</p>
          </div>

          <p className="comment-list__comment">{addedcomment.comment}</p>
        </div>
      </div>
    );
  }

