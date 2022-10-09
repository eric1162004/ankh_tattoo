import { CSSTransition } from "react-transition-group";
import React, { useState, useRef, useEffect } from "react";

const Test = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  const [display, setDisplay] = useState(true);
  
  useEffect(() => {
    const getPageYOffset = () => { 
        if (window.pageYOffset > 0){
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }
    window.addEventListener("scroll", getPageYOffset)
    return () => window.removeEventListener("scroll", getPageYOffset);
  }, [])

  return (
    <div>
      {showButton && (
        <button className={"btn " + (display ? "block" : "hidden")} onClick={() => setShowMessage(true)}>
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={1000}
        classNames="list-transition"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
      <div>
        <p ref={nodeRef}>This alert message is being transitioned in and out of the DOM.</p>
        <button className="btn" onClick={() => setShowMessage(false)}>
          Close
        </button>
      </div>
      </CSSTransition>

      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam asperiores animi odit inventore explicabo recusandae, dolorum, excepturi doloremque eius aperiam natus! Esse cumque dolorem maxime amet ab, perspiciatis commodi!</p>
      </div>

    </div>
  );
};

export default Test;
