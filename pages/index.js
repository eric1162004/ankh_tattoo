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
        image={"img/background_with_logo_2.jpg"}
        speed={-20}
      >
        <div className="flex flex-col h-full items-center justify-center">
          <img className="object-contain" src="img/miki_logo_black.png" width={250} />
          <p className="title text-center">VANCOUVER FINELINE TATOO</p>
        </div>
      </ImageParallaxDiv>

      {/* Fine Line Tatoo */}
      <ImageParallaxDiv
        backgroundStyle="brightness-90"
        image={"img/finelineTattoo.jpg"}
        speed={-20}
      >
        <div className="text-primary flex flex-col h-full justify-center md:w-1/2 p-5 md:p-20 backdrop-blur-sm backdrop-brightness-50">
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

      {/* My Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img className="" src="img/myStory.jpg" />
        <div className="flex flex-col justify-center p-5 bg-black text-primary">
          <p className="title">My Story</p>
          <p className="paragraph">
            I am Miki, a tattoo artist in Ankh tattoo studio. I was born and
            raised in Hong Kong, and I moved to Vancouver since 2005. From an
            early age, I have always been passionate about art, drawing and
            designing. While working in the studio as brows artist, I got a
            chance to learning tattoo under mentorship of Nancy Liang. With the
            experience working in detail with machine, I was fascinated and
            extremely interested in the fine-line tattoo style, which create
            incredibly detailed minimalistic tattoo. Continuing advancing in
            past 3 years, I found my passion in micro-realistic style and love
            working on small dainty tattoo with incredible details and with
            color as highlight brightening up the piece. I also like to play
            with geometric design to create perfect line and shape on body.
          </p>
        </div>
      </div>

      {/* Video background */}
      <VideoBackgroundDiv video="video/charge.mov">
        <div className="flex flex-col  h-full justify-center backdrop-blur-sm text-primary">
          <div className="flex flex-col md:w-1/2 text-center p-5 gap-3">
            <h1 className="title">Tattoo rate</h1>
            <p className="text-lg">Charge by piece</p>
            <p className="text-5xl">Start from $125</p>
            <p className="text-sm">
              Accept black & grey, white and color tattoo request.{" "}
            </p>
            <p className="text-sm">
              Accept booking around 2-8 weeks in advance.{" "}
            </p>
          </div>
        </div>
      </VideoBackgroundDiv>
    </div>
  );
}
