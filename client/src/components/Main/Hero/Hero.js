import play from '../../../assets/Icons/play.svg';
import fullscreen from '../../../assets/Icons/fullscreen.svg';
import volume from '../../../assets/Icons/volume_up.svg'
import './Hero.scss';



function VideoSection({ selectedVideo }) {
  return (
    <div className="hero">
      <div className="hero__background">
        <video className="hero__video" poster={selectedVideo.image}>
          <source src={selectedVideo.video} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className="hero__controls">
            <img src={play} className="hero__play" alt="Play Button"/>
            <div className="hero__video-process">
              <div className="hero__progress-bar"></div>
              <span className="hero__progress-time">0:00 / 0:42</span>
            </div>

            <div className="hero__settings">
              <img src={fullscreen} alt="Video fullscreen button"/>
              <img src={volume} alt="Vol control button"/>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default VideoSection;

