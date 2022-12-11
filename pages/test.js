import React, { useState, useRef, useEffect } from "react";
import Map from "../components/Map";

const Test = () => {
  return (
    <div className="grayscale">
      {<Map lat={49.26666} lng={-123.11149} zoom={12}/>}
    </div>
  );
};

export default Test;
