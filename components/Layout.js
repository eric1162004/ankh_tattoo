import { CSSTransition } from "react-transition-group";
import React, { useState, useRef, useEffect, useCallback } from "react";

import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

// Layout support sticky navbar and footer using flex
// Allow some global css is defined here.

const Layout = ({ children }) => {
  const navRef = useRef();
  const instagramRef = useRef();
  const upArrowRef = useRef();
  const [display, setDisplay] = useState(true);
  const [displayBookingBanner, setDisplayBookingBanner] = useState(true);

  const getPageYOffset = useCallback(() => {
    if (window.pageYOffset > 0) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [setDisplay]);

  useEffect(() => {
    window.addEventListener("scroll", getPageYOffset);
    return () => window.removeEventListener("scroll", getPageYOffset);
  }, [getPageYOffset]);

  return (
    <div className="flex flex-col h-screen font-normal bg-primary">
      {/* Booking now */}
      {displayBookingBanner && (
        <div
          className="w-full bg-black text-center text-primary "
        >
          <a href="https://form.jotform.com/Sheir/tattoo-request-form">Booking now</a>
          <span className="float-right pr-2" onClick={() => setDisplayBookingBanner(false)}>X</span>
        </div>
      )}

      {/* Navbar */}
      {/* <div className="shrink-0"> */}
      <CSSTransition
        in={display}
        nodeRef={navRef}
        timeout={300}
        classNames="nav-transition"
        unmountOnExit
      >
        <div ref={navRef} className="relative top-0 drop-shadow-lg">
          <Navbar />
        </div>
      </CSSTransition>
      {/* </div> */}

      {/* Main Content */}
      <div className="bg-gradient-to-b from-primary-dark to-primary-light grow">
        {children}
      </div>

      {/* Footer */}
      <div className="shrink-0">
        <Footer />
      </div>

      {/* instagram icon */}
      <CSSTransition
        in={display}
        nodeRef={instagramRef}
        timeout={300}
        classNames="slide-right-transition"
        unmountOnExit
      >
        <a href="https://www.instagram.com/ankh.miki">
          <img
            ref={instagramRef}
            className="fixed bottom-5 right-5 iconSize md:bottom-14 md:right-10 drop-shadow"
            src="img/ig_icon.png"
          />
        </a>
      </CSSTransition>

      {/* up arrow icon */}
      <CSSTransition
        in={!display}
        nodeRef={upArrowRef}
        timeout={300}
        classNames="slide-right-transition"
        unmountOnExit
      >
        <a className="" href="#">
          <svg
            ref={upArrowRef}
            className="fixed bottom-5 right-5 iconSize md:bottom-14 md:right-10 bg-white bg-opacity-10  hover:bg-opacity-20 rounded-full drop-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f2f2f2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </a>
      </CSSTransition>
    </div>
  );
};

export default Layout;
