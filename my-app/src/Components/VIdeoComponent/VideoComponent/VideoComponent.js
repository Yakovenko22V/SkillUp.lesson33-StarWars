import React from "react";
import Untitled from '../../../video/Untitled.mp4'
import './video.scss'

function VideoComponent () {
    return (
        <video id="background-video" loop muted autoPlay>
        <source src={Untitled} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    )
}
export default VideoComponent;

