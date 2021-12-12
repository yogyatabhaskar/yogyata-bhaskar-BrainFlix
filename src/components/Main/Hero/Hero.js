
import './Hero.scss';



function VideoSection({ selectedVideo }) {
  return (
    <div className="hero">
      <video className="hero__video" poster={selectedVideo.image}>
        <source src={selectedVideo.video} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="hero__buttons">
          {/* <img src={playbutton} alt="play-button" /> */}

      </div>
    </div>
  );
}

export default VideoSection;
