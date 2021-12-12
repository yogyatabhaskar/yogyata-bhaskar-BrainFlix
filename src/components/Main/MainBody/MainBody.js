import mohan from '../../../assets/Images/Mohan-muruge.jpg';
import viewicon from "../../../assets/Icons/views.svg";
import likeicon from "../../../assets/Icons/likes.svg";
import "./MainBody.scss";

function VideoInfo({ selectedVideo }) {
  return (
    <main className="videoinfo">
      <h1>{selectedVideo.title}</h1>
      <div className="videoinfo__detail">
        <p className="videoinfo__channel">{selectedVideo.channel}</p>
        <p className="videoinfo__date">{selectedVideo.timestamp}</p>
      </div>
      <div className="videoinfo__social">
        <div className="videoinfo__views">
          <img
            className="videoinfo__viewimg"
            src={viewicon}
            alt="views-icon"
          />
          <p className="videoinfo__viewnum">{selectedVideo.views}</p>
        </div>
        <div className="videoinfo__likes">
          <img
            className="videoinfo__likeimg"
            src={likeicon}
            alt="likes-icon"
          />
          <p className="videoinfo__likenum">{selectedVideo.likes}</p>
        </div>
      </div>
      <p className="videoinfo__description">{selectedVideo.description}</p>

      <div className="review">
        <h5 className="review__title">JOIN THE CONVERSATION</h5>
        <div className="review__createcomment">
          <img
            className="review__thumbnail"
            src={mohan}
            alt="mohan-thumbnail"
          />
            <div className="review__commentbox">
                <input
                    className="review__textbox"
                    type="text"
                    placeholder="Add a new comment"
                ></input>
                <button className="review__button">COMMENT</button>
            </div>
        </div>

        
      </div>
    </main>
  );
}

export default VideoInfo;

// {this.state.articles.map((article) => {
//   return <Article key={article.id} title={article.title} />;
// })}