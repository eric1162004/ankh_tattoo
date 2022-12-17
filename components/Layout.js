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
  const bookingNowRef = useRef();
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
        <CSSTransition
          in={navDisplay}
          nodeRef={bookingNowRef}
          timeout={300}
          classNames="nav-transition"
          unmountOnExit
        >
          <div
            ref={bookingNowRef}
            className="grid grid-cols-3 w-full bg-black text-center text-primary px-2 z-50 content-center"
          >
            <div></div>
            <a
              className="place-self-center"
              href="https://form.jotform.com/Sheir/tattoo-request-form"
              target="_blank"
              rel="noreferrer"
            >
              <img src="img/book_now.png" width={130} />
            </a>
            <span
              className="place-self-end self-center text-lg px-5"
              onClick={() => setDisplayBookingBanner(false)}
            >
              x
            </span>
          </div>
        </CSSTransition>
      )}

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
              darkContext={
                router.pathname === "/faq" || router.pathname === "/contact_us"
                  ? true
                  : false
              }
            />
          </div>
        </CSSTransition>

        {/* Main Content */}
        {children}
      </div>
      {/* Footer */}
      <div className="shrink-0 z-50">
        <Footer />
      </div>

      {/* instagram icon */}

      <a className="z-50" href="https://www.instagram.com/ankh.miki">
        <img
          ref={instagramRef}
          className="fixed bottom-5 right-5 iconSize md:bottom-14 md:right-10 drop-shadow"
          src="img/ig_icon.png"
        />
      </a>
    </div>
  );
};

export default Layout;
