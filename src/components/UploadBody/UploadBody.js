import React from 'react';
import "./UploadBody.scss"
import imagepath from '../../assets/Images/Upload-video-preview.jpg';

export default function VideoUpload() {

    return (
        // Video Upload section
        <div className="upload">
                <h1 className= "upload__header">Upload Video</h1>
                <div className="upload__border">
                    <section className="upload__hero">
                        
                        <p className="upload__title">VIDEO THUMBNAIL</p>
                        <img className="upload__video" src={imagepath} alt="video-thumnail"/>
                    </section>
                    <section className="upload-input">
                        <div className="upload-input__border">
                            <p className="upload-input__title">TITLE YOUR VIDEO</p>
                            <input className="upload-input__input1" placeholder="Add a title to your video"></input>
                            <p className="upload-input__title">ADD A VIDEO DESCRIPTION</p>
                            <textarea className="upload-input__input2" placeholder="Add a description of your video"></textarea>
                        </div>
                    </section>
                </div>
                <div className="upload-input__buttons">
                    {/* <button className="upload-input__buttons__cancel-button1">CANCEL</button> */}
                    <button className="upload-input__buttons__publish-button">PUBLISH</button>
                    <button className="upload-input__buttons__cancel-button2">CANCEL</button>
                </div>
            </div>  
    );
}