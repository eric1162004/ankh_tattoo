import React from "react";
import Map from "../components/Map";
import { Carousel } from "react-responsive-carousel";

export default function Contact_us() {
  return (
    <div className="max-h-screen overflow-hidden">
      {/* Contact and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 w-full h-full md:gap-28 top-0 z-10 absolute overflow-scroll text-sm md:text-base">
        <div className="flex flex-col h-full items-end justify-center grayscale overflow-hidden mt-10 md:mt-0">
          {<Map lat={49.26666} lng={-123.11149} zoom={15} />}
        </div>
        <div className="flex flex-col h-full items-start justify-center  text-primary">
          <div className="text-center backdrop-brightness-50 p-5 md:p-16">
            <h1 className="title text-2xl my-0 tracking-wider">Contact us</h1>
            <p>Studio address</p>
            <p>(By appointment only)</p>
            <a
              href="https://www.google.com/search?q=326+W+5th+Ave"
              target="_blank"
              rel="noreferrer"
            >
              <p>326 W 5th Ave, Vancouver BC </p>
              <p>Studio #12 @ The Beaumont</p>
            </a>
            <p>E-mail: miki@grandarc.ca</p>
            <p>
              Instagram
              <img className="inline" src="img/ig_icon.png" width={20} />:{" "}
              <a href="https://www.instagram.com/ankh.miki">ankh.miki</a>
            </p>
            <button className="btn border-2 border-primary m-2 text-primary bg-transparent mt-4 z-50">
              <a
                href="https://form.jotform.com/Sheir/tattoo-request-form"
                target="_blank"
                rel="noreferrer"
              >
                Tattoo Request Form
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="blur-sm">
        <Carousel
          interval={3000}
          transitionTime={1000}
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          swipeable={false}
          dynamicHeight={true}
        >
          <div>
            <img
              className="min-h-screen object-cover"
              src="img/contact_us_1.jpg"
            />
          </div>
          <div>
            <img
              className="min-h-screen object-cover"
              src="img/contact_us_2.jpg"
            />
          </div>
          <div>
            <img
              className="min-h-screen object-cover"
              src="img/contact_us_3.jpg"
            />
          </div>
          <div>
            <img
              className="min-h-screen object-cover"
              src="img/contact_us_4.jpg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
