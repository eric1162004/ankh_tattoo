import React from "react";
import Map from "../components/Map";

export default function Contact_us() {
  return (
    <>
      {/* Contact and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 h-full gap-5">
        <div className="flex flex-col h-full items-center justify-center grayscale overflow-hidden">
          {<Map lat={49.26666} lng={-123.11149} zoom={15}/>}
        </div>
        <div className="flex flex-col h-full items-center justify-center text-center text-black">
          <h1 className="title text-2xl my-0 tracking-wider">Contact us</h1>
          <p>Studio address (By appointment only)</p>
          <p>326 W 5th Ave, Vancouver BC Studio #12 @ The Beaumont Studio</p>
          <p>E-mail: miki@grandarc.ca</p>
          <p>
            Instagram
            <img className="inline" src="img/ig_icon.png" width={20} />:{" "}
            <a href="https://www.instagram.com/ankh.miki">ankh.miki</a>
          </p>
          <button className="btn border-2 border-black m-2 text-black bg-transparent mt-4">
            <a href="https://form.jotform.com/Sheir/tattoo-request-form">
              Tattoo Request Form
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
