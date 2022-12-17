import React from "react";
import Map from "../components/Map";

export default function Contact_us() {
  return (
    <>
      {/* Contact and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black px-5 py-10 h-full md:gap-40">
        <div className="flex flex-col h-full items-center md:items-end grayscale overflow-hidden ">
          {<Map lat={49.26666} lng={-123.11149} zoom={15} />}
        </div>
        <div className="flex flex-col h-full items-center md:items-start m-2 gap-1 justify-center ">
          <div className="text-center text-sm md:text-lg text-primary-light">
            <h1 className="title text-2xl my-0 tracking-wider">Contact us</h1>
            <p>Studio address</p>
            <p>(By appointment only)</p>
            <a href="https://www.google.com/search?q=326+W+5th+Ave">
              <p>326 W 5th Ave, Vancouver BC </p>
              <p>Studio #12 @ The Beaumont</p>
            </a>
            <p>E-mail: miki@grandarc.ca</p>
            <p>
              Instagram
              <img className="inline" src="img/ig_icon.png" width={20} />:{" "}
              <a href="https://www.instagram.com/ankh.miki">ankh.miki</a>
            </p>
            <button className="btn btn-accent btn-outline border-2 m-3 ">
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
    </>
  );
}
