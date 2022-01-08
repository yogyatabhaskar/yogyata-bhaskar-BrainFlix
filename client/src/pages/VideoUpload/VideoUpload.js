import { Component } from "react";
import Header from "../../components/Header/Header";
import UploadBody from '../../components/UploadBody/UploadBody';

class VideoUpload extends Component {
render() {
    return(
        <div>
        <Header />
        <UploadBody />
        </div>
    )
}

}

export default VideoUpload;