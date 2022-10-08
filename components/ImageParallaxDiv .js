import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function ImageParallaxDiv({ children, image, speed, className="" }) {
  return (
    <ParallaxBanner className={`aspect-[1/1.5] md:aspect-[2.5/1] ${className}`}>
      <ParallaxBannerLayer image={`"${image}"`} speed={speed} />
      <ParallaxBannerLayer>{children}</ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default ImageParallaxDiv;
