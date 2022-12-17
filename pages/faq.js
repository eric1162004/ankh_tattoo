import React from "react";

import data from "../data/faq.json";
import VideoBackgroundDiv from "../components/VideoBackgroundDiv";

export default function Faq() {
  return (
    <div className="md:text-lg h-full w-full">
      {/* FAQ video background */}
      <VideoBackgroundDiv
        className="h-full w-full backdrop-blur-xs "
        height={100}
        video="video/faq.mov"
      >
        <div className="backdrop-brightness-50 md:px-32 text-primary ">
          <div className="flex pt-36 justify-center items-center p-5 ">
            <div className="">
              <h1 className="title">Frequently Asked Question</h1>
              <p className="paragraph">
                Tattoo is permanent and it’s a big decision and commitment in
                life. You may have a lot of question and concern before making
                the decision. Please read the FAQ section below to find the
                answer of most frequently asked question, and feel free to
                contact me about your concern.
              </p>
            </div>
          </div>
          <div className="">
            {data["faq"].map((item, index) => (
              <div
                className="collapse collapse-arrow backdrop-opacity-50 backdrop-blur-lg m-2"
                key={index}
              >
                <input type="checkbox" />
                <div className="collapse-title font-bold underline underline-offset-4">
                  {item.question}
                </div>
                <div
                  className="collapse-content "
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </VideoBackgroundDiv>
    </div>
  );
}
