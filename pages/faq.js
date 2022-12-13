import React, { useState } from "react";

import ImageParallaxDiv from "../components/ImageParallaxDiv ";
import data from "../data/faq.json";
import GetAQuote from "../components/GetAQuote";
import VideoBackgroundDiv from '../components/VideoBackgroundDiv';

export default function Faq() {
  const [category, setCategory] = useState("price");

  return (
    <div>
      {/* FAQ video background */}      
      <VideoBackgroundDiv video="video/faq.mov">
      <div className="flex text-primary h-full justify-center items-center p-5 backdrop-blur-xs backdrop-brightness-50">
          <div className="md:w-2/3">
            <h1 className="title underline">FAQ</h1>
            <p className="paragraph md:w-2/3">
              Tattoo is permanent and it’s a big decision and commitment in
              life. You may have a lot of question and concern before making the
              decision. Please read the FAQ section below to find the answer of
              most frequently asked question, and feel free to contact me about
              your concern.
            </p>
          </div>
        </div>
      </VideoBackgroundDiv>
      <div className="flex justify-center p-5 backdrop-brightness-50 backdrop-opacity-10">
        <div className="md:w-2/3 ">
          {data["faq"].map((item, index) => (
            <div className="collapse collapse-arrow" key={index}>
              <input type="checkbox" />
              <div className="collapse-title font-bold underline underline-offset-4">{item.question}</div>
              <div
                className="collapse-content "
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}