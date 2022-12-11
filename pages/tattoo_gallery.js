import React, { useState, useEffect, useMemo } from "react";
import ImgsViewer from "react-images-viewer";

function useViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1);
  };
  const gotoNextImg = () => {
    setCurrImg(currImg + 1);
  };

  return [isOpen, setIsOpen, currImg, setCurrImg, gotoPrevImg, gotoNextImg];
}

export default function Tattoo_gallery({ data }) {
  const collections = ["feature", "script", "color", "geo", "flash"];

  const viewers = [useViewer(),useViewer(),useViewer(),useViewer(),useViewer()]

  const [isOpen, setIsOpen, currImg, setCurrImg, gotoPrevImg, gotoNextImg] = [
    0, 1, 2, 3, 4, 5,
  ];

  const [images, setImages] = useState();

  useEffect(() => {
    

    let images = collections.map(collection => {
      let imageLinks = Array(data[collection])
        .fill(0)
        .map((_, i) => ({
          src: `img/gallery/${collection}/${i + 1}.jpg`,
        }));
      return imageLinks;
    });

    setImages(images);
  }, []);

  const onImgClick = (imageIndex, collectionIndex) => {
    console.log(viewers);
    viewers[collectionIndex][setIsOpen](!viewers[collectionIndex][isOpen]);
    viewers[collectionIndex][setCurrImg](imageIndex);
  };

  return (
    <div className="container mx-auto">
      {images &&
        images.map((collection, collectionIndex) => {
          return (
            <div
              className="grid-cols-3 md:grid-cols-5 m-2 p-2 space-y-0 grid gap-1 border-b-2"
              key={collectionIndex}
            >
              <h1 className="title text-center self-center">
                {collections[collectionIndex]}
              </h1>
              {collection.map((image, imageIndex) => (
                <div className="w-full rounded" key={imageIndex}>
                  <img
                    className="block object-cover object-center w-full h-full rounded-lg hover:brightness-105"
                    src={image.src}
                    key={imageIndex}
                    onClick={() => onImgClick(imageIndex, collectionIndex)}
                  />
                </div>
              ))}
            </div>
          );
        })}

      {images &&
        images.map((collection, collectionIndex) => (
          <div key={collectionIndex}>
            <ImgsViewer
              imgs={collection}
              isOpen={viewers[collectionIndex][isOpen]}
              currImg={viewers[collectionIndex][currImg]}
              onClickPrev={() => viewers[collectionIndex][gotoPrevImg]()}
              onClickNext={() => viewers[collectionIndex][gotoNextImg]()}
              onClose={() => viewers[collectionIndex][setIsOpen]()}
              backdropCloseable={true}
            />
          </div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  let data = {
    feature: 7,
    script: 15,
    color: 10,
    geo: 14,
    flash: 11,
  };

  return {
    props: { data },
  };
}
