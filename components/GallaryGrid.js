import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";

let generatedImages = Array(50)
.fill(1)
.map(() => {
  const height = Math.floor(Math.random() * (600 - 300) + 300);
  const width = Math.floor(Math.random() * (700 - 200) + 200);
  return {
    src: `https://via.placeholder.com/${width}x${height}`,
    width: width * 10,
    height: height * 10,
  };
});

export default function GallaryGrid() {
  const [isOpen, setIsOpen] = useState(true);
  const [currImg, setCurrImg] = useState(0);

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1);
  };
  const gotoNextImg = () => {
    setCurrImg(currImg + 1);
  };


  const [images] = useState(generatedImages);

  const onImgClick = imgIndex => {
    setIsOpen(!isOpen);
    setCurrImg(imgIndex);
    console.log(imgIndex);
  };

  return (
    <div className="container mx-auto">
      <div className="grid-cols-5 p-5 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        {images.map((e, i) =>
          i % 7 == 0 ? (
            <div className="w-full col-span-2 row-span-2 rounded" key={i}>
              <img
                className="block object-cover object-center w-full h-full rounded-lg"
                src={e.src}
                key={i}
                onClick={() => onImgClick(i)}
              />
            </div>
          ) : (
            <div className="w-full rounded" key={i}>
              <img
                className="block object-cover object-center w-full h-full rounded-lg"
                src={e.src}
                key={i}
                onClick={() => onImgClick(i)}
              />
            </div>
          )
        )}
      </div>
      <ImgsViewer
        imgs={images}
        isOpen={isOpen}
        currImg={currImg}
        onClickPrev={() => gotoPrevImg()}
        onClickNext={() => gotoNextImg()}
        onClose={() => setIsOpen()}
      />
    </div>
  );
}
