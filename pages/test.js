import { CSSTransition } from "react-transition-group";
import React, { useState, useRef } from "react";

const Test = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div>
      {showButton && (
        <button className="btn" onClick={() => setShowMessage(true)}>
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

      <div></div>
    </div>
  );
};

export default Test;
