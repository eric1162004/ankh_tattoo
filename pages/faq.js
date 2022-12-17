import React from "react";

import data from "../data/faq.json";

export default function Faq() {
  return (
    <div className="text-base md:text-lg h-full w-full">
      {/* FAQ video background */}
      <video
        style={{ position: "fixed" }}
        className="object-cover w-full h-full"
        src="video/faq.mov"
        playsInline
        autoPlay
        muted
        loop
      ></video>

      <div className="backdrop-brightness-50 md:px-32 text-primary pb-10 px-5 ">
        <div className="flex flex-col pt-24 py-10 md:py-20 md:pt-36 px-5 ">
          <h1 className="title">Frequently Asked Question</h1>
          <p className="paragraph text-base md:text-lg">
            Tattoo is permanent and it’s a big decision and commitment in life.
            You may have a lot of question and concern before making the
            decision. Please read the FAQ section below to find the answer of
            most frequently asked question, and feel free to contact me about
            your concern.
          </p>
        </div>
        <div className="rounded-sm backdrop-blur-sm bg-white/20 p-1 md:p-2">
          {data["faq"].map((item, index) => (
            <div className="collapse collapse-arrow" key={index}>
              <input type="checkbox" />
              <div className="collapse-title font-bold underline underline-offset-4">
                {item.question}
              </div>
              <div
                className="collapse-content"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
