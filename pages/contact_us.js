import React from "react";
import Map from "../components/Map";

export default function Contact_us() {
  return (
    <>
      {/* Contact and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 h-full">
        <div className="flex flex-col h-full items-center justify-center grayscale">
          {<Map lat={49.26666} lng={-123.11149} zoom={15} />}
        </div>
        <div className="flex flex-col h-full items-center justify-center text-black">
          <h1 className="title text-2xl my-0 tracking-wider">Contact us</h1>
          <p>Studio address (By appointment only)</p>
          <p>326 W 5th Ave, Vancouver BC Studio #12 @ The Beaumont Studio</p>
          <p>E-mail: miki@grandarc.ca</p>
          <p>Instagram (icon): ankh.miki</p>
          <h1 className="title text-2xl my-0 tracking-wider mt-3">
            Tattoo request form
          </h1>
          <a className="">
            https://form.jotform.com/Sheir/tattoo-request-form
          </a>
        </div>
      </div>
    </>
  );
}
