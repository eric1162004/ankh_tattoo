import React from "react";

import ImageParallaxDiv from "./../components/ImageParallaxDiv ";

export default function tattoo_faq() {
  return (
    <div>
      {/* Image2 background */}
      <ImageParallaxDiv
        className={"md:aspect-[3.5/1]"}
        backgroundStyle="brightness-90"
        image={"img/pic1.png"}
        speed={-20}
      >
        <div className="flex flex-col h-full justify-center p-5 md:p-20 backdrop-blur-sm backdrop-brightness-50">
          <h1 className="title ">FREQUENT QUESTIONS</h1>
          <p className="paragraph ">
            Getting a tattoo is a big decision and like any big decision,
            tattoos comes with a lot of questions. Sometimes an artist/client
            relationship lasts a lifetime. Your tattoo certainly does! So the
            last thing I want is any negativity involved in your tattoo
            experience. See the FAQ section below for answers to some of the
            more frequent questions. If you still have questions feel free to
            send them in the form of an inquiry using the book a tattoo form.
          </p>
        </div>
      </ImageParallaxDiv>

      <div className="flex justify-center p-5 backdrop-brightness-50 backdrop-opacity-50 rounded-sm">
        <div className="md:w-2/3">
          <h1 className="title ">FAQ</h1>
          <p className="paragraph">
            Please review the questions below before sending a tattoo inquiry.
            Please note that if you choose to send an inquiry, a response can
            take up to 5 business days.
          </p>

          <h1 className="title ">Frequently asked questions</h1>

          <div className="tabs">
            <a className="tab tab-bordered">Price</a>
            <a className="tab tab-bordered tab-active px-2 md:px-6">
              Booking & Appointments
            </a>
            <a className="tab tab-bordered">General info</a>
          </div>


        </div>
      </div>
    </div>
  );
}
