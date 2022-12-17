import React, { useState, useEffect, useMemo } from "react";
import ImgsViewer from "react-images-viewer";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";

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

export default function Gallery({ data }) {
  const collections = ["feature", "script", "color", "geometric", "flash"];

  const viewers = [
    useViewer(),
    useViewer(),
    useViewer(),
    useViewer(),
    useViewer(),
  ];

  const [isOpen, setIsOpen, currImg, setCurrImg, gotoPrevImg, gotoNextImg] = [
    0, 1, 2, 3, 4, 5,
  ];

  const [images, setImages] = useState();
  const [resizedImages, setResizedImages] = useState();

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

    let resizedImages = collections.map(collection => {
      let imageLinks = Array(data[collection])
        .fill(0)
        .map((_, i) => ({
          src: `img/gallery_resized/${collection}/${i + 1}.jpg`,
        }));
      return imageLinks;
    });

    setResizedImages(resizedImages);
  }, []);

  const onImgClick = (imageIndex, collectionIndex) => {
    viewers[collectionIndex][setIsOpen](!viewers[collectionIndex][isOpen]);
    viewers[collectionIndex][setCurrImg](imageIndex);
  };

  return (
    <div className="container mx-auto pt-16">
      {resizedImages &&
        resizedImages.map((collection, collectionIndex) => {
          return (
            <div
              className="grid-cols-3 md:grid-cols-5 m-2 p-2 space-y-1 grid gap-1"
              key={collectionIndex}
            >
              <h1 className="title text-center self-center skew-x-1">
                <AnimationOnScroll
                  duration={1}
                  animateIn="animate__fadeInDown"
                  animateOnce={true}
                >
                  {collections[collectionIndex]}
                </AnimationOnScroll>
              </h1>
              {collection.map((image, imageIndex) => (
                <div
                  className="w-full rounded self-center"
                  key={imageIndex}
                  onClick={() => onImgClick(imageIndex, collectionIndex)}
                >
                  <LazyLoad offset={5}>
                    <img
                      className="block object-cover object-center w-full h-full rounded-lg hover:brightness-90 hover:contrast-125 "
                      src={image.src}
                    />
                  </LazyLoad>
                </div>
              ))}
            </div>
          );
        })}

      {/* Image Viewer Popup */}
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
    geometric: 14,
    flash: 10,
  };

  return {
    props: { data },
  };
}
