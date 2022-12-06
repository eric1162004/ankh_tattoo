import { CSSTransition } from "react-transition-group";
import React, { useState, useRef, useEffect } from "react";

const Test = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  const [display, setDisplay] = useState(true);
  
  useEffect(() => {

  }, [])

  return (
    <div>

      <div id="bm">

      </div>
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
