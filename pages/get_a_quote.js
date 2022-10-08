import React from "react";
import GetAQuote from "../components/GetAQuote";

import data from "../data/get_a_quote.json";

export default function get_a_quote() {
  console.log(data.hourlyRate);
  return (
    <div className="p-5 backdrop-brightness-75">
      {/* Page title */}
      <div className="flex flex-col w-full text-center">
        <h1 className="title text-2xl my-0 tracking-wider">BOOKING A TATTOO</h1>
        <p className="title text-primary-light">Bespoke & Freehand books open</p>
      </div>

      {/* Hourly Rate */}
      <h1 className="title text-2xl pt-2">Hourly Rate:</h1>
      {data.hourlyRate.map((section, index) => (
        <div key={index}>
          <p className="title py-1">{section.title}</p>
          <ul className="list-inside">
            {section.details.map((item, index) => (
              <li className="list-disc" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Initial Deposit */}
      <h1 className="title text-2xl py-2 mt-5">Initial Deposit</h1>
      {data.initialDeposit.map((section, index) => (
        <div key={index}>
          <p className="title py-1">{section.title}</p>
          <div dangerouslySetInnerHTML={{ __html: section.details }} />
          {/* <p>{section.details}</p> */}
        </div>
      ))}

      {/* Set up Forms */}


      {/* Get a quote button */}
      <GetAQuote/>
    </div>
  );
}
