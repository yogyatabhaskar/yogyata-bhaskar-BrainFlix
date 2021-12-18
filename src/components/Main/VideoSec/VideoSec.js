import "./VideoSec.scss";
// import { Link } from 'react-router-dom';

function VideoRecommendation({ videos, selectVideo }) {
  return (
    <div className="video-recommendation">
      <div>
        <p className="video-recommendation__header">NEXT VIDEO</p>
      </div>

      <div className="video-recommendation__container">
        {videos.map((video) => {
          return (
            <button
              key={video.id}
              className="video-recommendation__button"
              onClick={() => {
                selectVideo(video.id);
              }}
            >
              <div className="video-recommendation__arrange">
                <img
                  className="video-recommendation__pic"
                  src={video.image}
                  alt={video.title}
                />

                <div className="video-recommendation__details">
                  <p className="video-recommendation__title">{video.title}</p>
                  <p className="video-recommendation__channel">
                    {video.channel}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default VideoRecommendation;


// function VideoRecommendation( { videos }) {
//   return(
//     <div className="video-recommendation">
//       <div>
//         <p className="video-recommendation__header">NEXT VIDEO</p>
//       </div>

//       <nav className="video-recommendation__container">
//         {videos.map((video) => (
          
//           <VideoItem />
      
//   );
// }
// </nav>
// function VideoItem ({video}) {
//   return(
//     <Link to={"/video/" + video.id} 
//     className="video-recommendation__button">
      
//       {plant.name}
  
//     </Link>
//   )
// }