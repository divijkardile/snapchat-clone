import React, { useRef } from "react";
import "./WebcamCapture.css";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamref = useRef(null);

  return (
    <div className="webcam">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamref}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default WebcamCapture;
