import React, { useState } from "react";

import ImageParallaxDiv from "./../components/ImageParallaxDiv ";
import data from "../data/faq.json";
import GetAQuote from "./../components/GetAQuote";

export default function Tattoo_faq() {
  const [category, setCategory] = useState("price");

  return (
    <div>
      {/* Image2 background */}
      <ImageParallaxDiv
        className={"md:aspect-[3.5/1]"}
        image={"img/pic1.png"}
        speed={-20}
      >
        <div className="flex h-full justify-center items-center p-5 backdrop-blur-sm backdrop-brightness-50">
          <div className="md:w-2/3">
            <h1 className="title ">FREQUENT QUESTIONS</h1>
            <p className="paragraph md:w-2/3">
              Getting a tattoo is a big decision and like any big decision,
              tattoos comes with a lot of questions. Sometimes an artist/client
              relationship lasts a lifetime. Your tattoo certainly does! So the
              last thing I want is any negativity involved in your tattoo
              experience. See the FAQ section below for answers to some of the
              more frequent questions. If you still have questions feel free to
              send them in the form of an inquiry using the book a tattoo form.
            </p>
          </div>
        </div>
      </ImageParallaxDiv>

      <div className="flex justify-center p-5 backdrop-brightness-50 backdrop-opacity-50">
        <div className="md:w-2/3 ">
          <h1 className="title py-2">FAQ</h1>
          <p className="paragraph md:w-2/3 mb-4">
            Please review the questions below before sending a tattoo inquiry.
            Please note that if you choose to send an inquiry, a response can
            take up to 5 business days.
          </p>

          <h1 className="title py-2">Frequently asked questions</h1>

          <div className="tabs py-2">
            <a
              className={
                "text-base tab tab-bordered " +
                (category === "price" ? "tab-active" : "")
              }
              onClick={() => setCategory("price")}
            >
              Price
            </a>
            <a
              className={
                "text-base tab tab-bordered " +
                (category === "booking" ? "tab-active" : "")
              }
              onClick={() => setCategory("booking")}
            >
              Booking
            </a>
            <a
              className={
                "text-base tab tab-bordered " +
                (category === "general" ? "tab-active" : "")
              }
              onClick={() => setCategory("info")}
            >
              General info
            </a>
          </div>

          {data[category].map((item, index) => (
            <div className="collapse collapse-arrow" key={index}>
              <input type="checkbox" />
              <div className="collapse-title ">{item.question}</div>
              <div
                className="collapse-content font-bold"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}

          {/* Get A Quote */}
          <GetAQuote className="mb-0 " />
        </div>
      </div>
    </div>
  );
}
