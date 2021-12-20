import { Component } from "react";
// import axios from "axios";
import Header from "../../components/Header/Header";
import UploadBody2 from '../../components/UploadBody/UploadBody';

class VideoUpload extends Component {
render() {
    return(
        <div>
        <Header />
        <UploadBody2 />
        </div>
    )
}

}

export default VideoUpload;