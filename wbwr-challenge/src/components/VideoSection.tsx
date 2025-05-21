import React from "react";
import videoFile from "../assets/Desktop Assets/UA_Theme_1_DT.mp4";

const VideoSection = () => {
  return (
    <section
      className="w-full py-12 px-4 flex flex-col items-center"
      style={{ backgroundColor: "#F0F0FA", height: "700px", marginTop: "80px", width: "1213px" }}
    >

      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-xl">
        <video
          className="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;