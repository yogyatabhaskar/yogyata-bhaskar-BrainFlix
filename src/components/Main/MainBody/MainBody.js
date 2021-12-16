import mohan from "../../../assets/Images/Mohan-muruge.jpg";
import viewicon from "../../../assets/Icons/views.svg";
import likeicon from "../../../assets/Icons/likes.svg";
import "./MainBody.scss";

function VideoInfo({ selectedVideo }) {
  const dateEl = new Date(selectedVideo.timestamp);

  return (
    <main className="videoinfo">
      <div className="videoinfo__container">
        <h1 className="videoinfo__title">{selectedVideo.title}</h1>

        <div className="videoinfo__brief">
          <div className="videoinfo__detail">
            <p className="videoinfo__channel">By {selectedVideo.channel}</p>
            <p className="videoinfo__date">{(dateEl).toLocaleDateString()}</p>
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
        </div>

        <div className="videoinfo__detail">
          <p className="videoinfo__description">{selectedVideo.description}</p>
        </div>

        <div className="review">
          <form className="review__form">
            <div><h5 className="review__count">3 Comments</h5></div>
            <div>
              <img
                className="review__thumbnail"
                src={mohan}
                alt="mohan-thumbnail"
              />
            </div>
            <div className="review__content">
              <label htmlFor="comment" className="review__input-label">
                JOIN THE CONVERSATION
              </label>
              <div className="review__styling">
                <textarea
                  className="review__text-container"
                  name="comment"
                  placeholder="Add a new comment"
                ></textarea>
                <button type="submit" className="review__button">
                  COMMENT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default VideoInfo;
