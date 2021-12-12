// import "./Main.scss";
// import Hero from './Hero/Hero';
import MainBody from './MainBody/MainBody';
import videoDetailsData from '../../data/video-details.json';
// import AddComment from './'
// import videosData from '././data/videos.json../../data/videos.json';
import { Component } from 'react';


// function Body() {
//   return (
//     <div>
//       {/* <Hero /> */}
//       <div>
//         <MainBody selectedVideo={this.state.selectedVideo}/>
//         {/* <VideoSec /> */}
//       </div>
//     </div>
//   );
// }

class Body extends Component {
    state = {
    //   videos: videosData,
      selectedVideo: videoDetailsData[0]
    }

    render() {
  
      return(
        <div className="home-page">
            {/* <Hero selectedVideo={this.state.selectedVideo}/> */}
            <MainBody selectedVideo={this.state.selectedVideo} /> 
            {/* <AddComments />     */}
        </div>
      )
    }
  }

export default Body;
