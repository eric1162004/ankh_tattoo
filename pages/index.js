import React from "react";

import VideoBackgroundDiv from "../components/VideoBackgroundDiv";
import ImageParallaxDiv from "../components/ImageParallaxDiv ";
import GetAQuote from "./../components/GetAQuote";

export default function Home() {
  return (
    <div className="">
      {/* Image1 background */}
      <ImageParallaxDiv
        backgroundStyle=""
        image={"img/banner1.png"}
        speed={-20}
      ></ImageParallaxDiv>

      {/* Image2 background */}
      <ImageParallaxDiv
        backgroundStyle="brightness-90"
        image={"img/pic1.png"}
        speed={-20}
      >
        <div className="flex flex-col h-full justify-center md:w-1/2 p-5 md:p-20 backdrop-blur-sm backdrop-brightness-50">
          <h1 className="title ">FINE LINE TATTOO ARTIST</h1>
          <p className="paragraph ">
            I offer fine line tattooing, which is different in comparison to a
            traditional tattoo. Fine line tattoos utilize a single needle and
            three round liners emphasizing form and outline over color, shading,
            and texture. These tattoos have incredible levels of detail built-in
            and create softer lines allowing for more options in the design
            process. If you&apos;re going to have a permanent piece of art on
            your body, why not make it the highest quality.
          </p>
        </div>
      </ImageParallaxDiv>

      {/* Video background */}
      <VideoBackgroundDiv video="video/video1.mp4">
        <div className="flex justify-end h-full">
          <div className="md:w-1/2 h-full w-full backdrop-blur-sm backdrop-brightness-50 flex items-center justify-center">
            <div className="h-2/3 w-2/3">
              <div>
                <h1 className="title">MY TATTOO RATE</h1>
                <p>Including tax</p>
              </div>
              <div className="grid grid-cols-1 gap-y-4 divide-y ">
                <div>
                  <p className="priceLabel">$300/hr</p>
                  <p>Bespoke tattoo</p>
                </div>
                <div>
                  <p className="priceLabel">$230/hr</p>
                  <p>Freehand tattoo</p>
                </div>
                <div>
                  <p className="priceLabel">$200/hr</p>
                  <p>Flash tatto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VideoBackgroundDiv>

      {/* My Story Section */}
      <div className="bg-primary-dark">
        <div className="flex justify-center backdrop-brightness-50 backdrop-opacity-50">
          <div className="md:w-4/5 p-5 ">
            <img className="w-48 -my-5" src="img/separator.svg" />
            <p className="title">MY STORY</p>
            <p className="paragraph md:w-2/3">
              Born and raised in Northern China, I have developed my love for
              art since the age of 5 and have trained as an illustrator for more
              than a couple decades. I moved to Vancouver, Canada in 2012 to
              pursue my passion for drawing in the form of animation while
              attending Emily Carr University. During my undergraduate studies,
              I established a passion for the human body and its significance in
              expressing one&apos;s identity and spirit. After graduation, I
              decided to pursue this passion via temporary tattoos using henna
              paste and jagua gel. After pursuing temporary tattooing, I was
              able to meet Mackenzie Evanjeline who offered to train me in the
              art of permanent tattooing. I have since been tattooing under The
              Northern Tattoo collective and I am excited to share my passion
              and work with the world.
            </p>

            <div className="grid md:grid-cols-4 my-5 gap-5">
              <img src="img/pic2.png" />
              <img src="img/pic2.png" />
              <img src="img/pic2.png" />
              <img src="img/pic2.png" />
            </div>

            {/* Get A Quote */}
            <GetAQuote className="mb-0 " />
           
          </div>
        </div>
      </div>
    </div>
  );
}
