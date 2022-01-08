import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UploadBody.scss";
import imagepath from "../../assets/Images/Upload-video-preview.jpg";

class VideoUpload extends Component {
  state = {
    title: "",
    description: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  isFormValid = () => {
    if (!this.state.title || !this.state.description) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.props.history.push("/videos");
      alert("Uploaded successfully");
    }
    else {
      alert("Fill up the fields")
    }
  };

  render() {
    return (
      <form className="upload" onSubmit={this.handleSubmit}>
        <h1 className="upload__header">Upload Video</h1>

        <div className="upload__border">
          <section className="upload__hero">
            <p className="upload__title">VIDEO THUMBNAIL</p>
            <img
              className="upload__video"
              src={imagepath}
              alt="video-thumnail"
            />
          </section>
          <section className="upload-input">
            <div className="upload-input__border">
              <label className="upload-input__title">
                TITLE YOUR VIDEO
                <input
                  placeholder="Add a title to your video"
                  className="upload-input__input1"
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  value={this.state.title}
                />
              </label>
              <label className="upload-input__title">
                ADD A VIDEO DESCRIPTION
                <input
                  placeholder="Add a description of your video"
                  className="upload-input__input2"
                  onChange={this.handleChange}
                  type="text"
                  name="description"
                  value={this.state.description}
                />
              </label>
            </div>
          </section>
        </div>
        <div className="upload-input__buttons">
          <button
            type="submit"
            disabled={!this.isFormValid()}
            className="upload-input__buttons__publish-button"
          >
            PUBLISH
          </button>
          <button className="upload-input__buttons__cancel-button2">
            CANCEL
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(VideoUpload);
