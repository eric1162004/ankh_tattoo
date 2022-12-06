import { CSSTransition } from "react-transition-group";
import React, { useState, useRef, useEffect } from "react";
import ImgsViewer from "react-images-viewer";

const Test = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currImg, setCurrImg] = useState(0);

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1)
  }
  const gotoNextImg = () => {
    setCurrImg(currImg + 1)
  }

  return (
    <div>
      <div>
        <ImgsViewer
          imgs={[
            { src: "https://via.placeholder.com/200x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/400x200" },
            { src: "https://via.placeholder.com/500x200" },
            { src: "https://via.placeholder.com/600x200" },
          ]}
          isOpen={isOpen}
          currImg={currImg}
          onClickPrev={() => gotoPrevImg()}
          onClickNext={() => gotoNextImg()}
          onClose={() => setIsOpen()}
        />
      </div>
    </div>
  );
};

export default Test;
