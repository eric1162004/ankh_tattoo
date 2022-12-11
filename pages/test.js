import React, { useState, useRef, useEffect } from "react";
import Map from "../components/Map";
import LazyLoad from "react-lazy-load";

const Test = () => {
  return (
    <div className="">
      {<Map lat={49.26666} lng={-123.11149} zoom={12} />}

      <div>
        <LazyLoad height={762}>
          <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
        </LazyLoad>
        <LazyLoad height={762}>
          <img src="https://images.unsplash.com/photo-1542300058-849d3b08aa0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        </LazyLoad>
        <LazyLoad height={762}>
          <img src="https://images.unsplash.com/photo-1542293787938-c9e299b880cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
        </LazyLoad>
        <LazyLoad height={762}>
          <img src="https://images.unsplash.com/photo-1450045439515-ff27c2f2e6b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Test;
