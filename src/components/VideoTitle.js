import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg bg-gradient-to-r from-black  absolute pt-[25%] px-12 text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="bg-sky-500 text-white p-2  px-12 text-xl rounded-md hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white p-2  px-12 text-xl rounded-md mx-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
