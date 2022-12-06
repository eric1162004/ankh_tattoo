import React from "react";

export default function Contact_us() {
  return (
    <div className="flex justify-center m-0 p-5 py-10 backdrop-brightness-50 backdrop-opacity-50 rounded-sm">
      <div className="md:w-2/3">
        {/* Page title */}
        <div className="flex flex-col w-full text-center">
          <h1 className="title text-2xl my-0 tracking-wider">Contact us</h1>
          <p className="text-primary-light">
            Studio address (By appointment only)
          </p>
          <p className="text-primary-light">
            326 W 5th Ave, Vancouver BC Studio #12 @ The Beaumont Studio
          </p>
          <p className="text-primary-light">E-mail: miki@grandarc.ca</p>
          <p className="text-primary-light">Instagram (icon): ankh.miki</p>
          <h1 className="title text-2xl my-0 tracking-wider">Tattoo request form</h1>
          <a className="text-primary-light">https://form.jotform.com/Sheir/tattoo-request-form</a>
        </div>

        {/* Set up Forms */}
      </div>
    </div>
  );
}
