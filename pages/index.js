import React from "react";

import VideoBackgroundDiv from "../components/VideoBackgroundDiv";
import ImageParallaxDiv from "../components/ImageParallaxDiv ";
import GetAQuote from "./../components/GetAQuote";

export default function Home() {
  return (
    <div className="">
      {/* background with logo */}
      <ImageParallaxDiv
        className=""
        backgroundStyle=""
        image={"img/backgroundWithLogo.jpg"}
        speed={-20}
      >
      <div className="flex flex-col h-full items-center justify-center">
        <img className="object-contain" src="img/logoblack.png" width={250} />
        <p className="title text-primary">VANCOUVER FINELINE TATOO</p>
      </div>
      </ImageParallaxDiv>

      {/* Image2 background */}
      <ImageParallaxDiv
        backgroundStyle="brightness-90"
        image={"img/pic1.png"}
        speed={-20}
      >
        <div className="flex flex-col h-full justify-center md:w-1/2 p-5 md:p-20 backdrop-blur-sm backdrop-brightness-50">
          <h1 className="title ">Fine-line Tattoo</h1>
          <p className="paragraph ">
            Fineline tattoo is subtle, delicate, and thin-line tattoo. Unlike
            traditional tattoos, which create thicker and bolder design,
            fine-line tattoos are created by just a single tattoo needle or
            combinations of small needles. This style of tattoo allows artist to
            create soft, tiny and minimalistic tattoos with intricately detailed
            design by using ultra-thin line incorporating with color, shading,
            and texture. It’s a growing trend in past decade to make delicate
            hidden tattoos, with super skinny lines and minimalist designs.
          </p>
        </div>
      </ImageParallaxDiv>

      {/* Video background */}
      <VideoBackgroundDiv video="video/video1.mp4">
        <div className="flex justify-end h-full">
          <div className="md:w-1/2 h-full w-full backdrop-blur-sm backdrop-brightness-50 flex items-center justify-center">
            <div className="h-2/3 w-2/3">
              <div className="divider"></div>
              <div className="py-2">
                <h1 className="title">Tattoo rate</h1>
                <p className="paragraph ">Charge by piece</p>
                <p className="paragraph ">Start from $125</p>
                <p className="paragraph ">
                  Accept black & grey, white and color tattoo request.{" "}
                </p>
                <p className="paragraph ">
                  Accept booking around 2-8 weeks in advance.{" "}
                </p>
              </div>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </VideoBackgroundDiv>

      {/* My Story Section */}
      <div className="bg-primary-dark">
        <div className="flex justify-center backdrop-brightness-50 backdrop-opacity-50">
          <div className="md:w-4/5 p-5 ">
            <img className="w-48 -my-5" src="img/separator.svg" />
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="img/miki_profile_pic.jpg" />
              </div>
            </div>
            <p className="title">My Story</p>
            <p className="paragraph md:w-2/3">
              I am Miki, a tattoo artist in Ankh tattoo studio. I was born and
              raised in Hong Kong, and I moved to Vancouver since 2005. From an
              early age, I have always been passionate about art, drawing and
              designing. While working in the studio as brows artist, I got a
              chance to learning tattoo under mentorship of Nancy Liang. With
              the experience working in detail with machine, I was fascinated
              and extremely interested in the fine-line tattoo style, which
              create incredibly detailed minimalistic tattoo. Continuing
              advancing in past 3 years, I found my passion in micro-realistic
              style and love working on small dainty tattoo with incredible
              details and with color as highlight brightening up the piece. I
              also like to play with geometric design to create perfect line and
              shape on body.
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
