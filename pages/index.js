import React from "react";

import VideoBackgroundDiv from "../components/VideoBackgroundDiv";
import ImageParallaxDiv from "../components/ImageParallaxDiv ";

export default function Home() {
  return (
    <div className="">
      {/* Image1 background */}
      <ImageParallaxDiv image={"img/pic2.png"} speed={-20} aspectRatio="2/2">
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
      </ImageParallaxDiv>

      {/* Image2 background */}
      <ImageParallaxDiv
        className="h-1/2 md:h-1/4"
        image={"img/pic1.png"}
        speed={-20}
        aspectRatio="2.5/1"
      >
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
        <h1 className="text-xl text-black font-thin">Hello World!</h1>
      </ImageParallaxDiv>

      {/* Video background */}
      <VideoBackgroundDiv
        video="video/video1.mp4"
      >
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </VideoBackgroundDiv>

      {/* Rest... */}
      {[...Array(10)].map((e, i) => (
        <h1 className="text-xl text-white font-thin" key={i}>Hello World!</h1>
      ))}
    </div>
  );
}
