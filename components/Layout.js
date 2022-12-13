import { CSSTransition } from "react-transition-group";
import React, { useState, useRef, useEffect, useCallback } from "react";

import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import { useRouter } from "next/router";

// Layout support sticky navbar and footer using flex
// Allow some global css is defined here.

const Layout = ({ children }) => {
  const router = useRouter();
  const navRef = useRef();
  const instagramRef = useRef();
  const upArrowRef = useRef();
  const [navDisplay, setNavDisplay] = useState(true);
  const [displayBookingBanner, setDisplayBookingBanner] = useState(true);

  const getPageYOffset = useCallback(() => {
    if (window.pageYOffset > 0) {
      setNavDisplay(false);
    } else {
      setNavDisplay(true);
    }
  }, [setNavDisplay]);

  useEffect(() => {
    window.addEventListener("scroll", getPageYOffset);
    return () => window.removeEventListener("scroll", getPageYOffset);
  }, [getPageYOffset]);

  return (
    <div className="flex flex-col h-screen font-normal bg-transparant">
      {/* Booking now */}
      {displayBookingBanner && (
        <div className="grid grid-cols-3 w-full bg-black text-center text-primary px-2 z-50">
          <div></div>
          <a href="https://form.jotform.com/Sheir/tattoo-request-form">
            Book now
          </a>
          <span
            className="place-self-end"
            onClick={() => setDisplayBookingBanner(false)}
          >
            x
          </span>
        </div>
      )}

      {/* Main Content */}
      <div className="relative grow">
        {/* Navbar */}
        <CSSTransition
          in={navDisplay}
          nodeRef={navRef}
          timeout={300}
          classNames="nav-transition"
          unmountOnExit
        >
          <div
            ref={navRef}
            className="drop-shadow-lg z-50 top-0 absolute w-full backdrop-opacity-10 bg-white/20"
          >
            <Navbar
              darkContext={router.pathname === "/faq" ? true : false}
            />
          </div>
        </CSSTransition>

        {children}

      {/* Footer */}
      </div>
      <div className="shrink-0">
        <Footer />
      </div>

      {/* instagram icon */}
      <CSSTransition
        in={navDisplay}
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
        in={!navDisplay}
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
