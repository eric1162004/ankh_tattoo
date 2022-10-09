import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const router = useRouter();
  const checkBoxRef = useRef();
  const menuFlyOutRef = useRef();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "MIKI SHEIR", link: "/" },
    { name: "TATTOO GALLERY", link: "/tattoo_gallery" },
    { name: "TATTOO FAQ", link: "/tattoo_faq" },
    { name: "GET A QUOTE", link: "/get_a_quote" },
  ];

  return (
    <nav className="z-50 p-2 text-2xl bg-primary sm:py-1 md:text-xl bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between md:mx-5">
        {/* brand logo */}
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center m-1 font-semibold md:m-1 whitespace-nowrap md:tracking-widest">
              ANKH.Miki
            </span>
          </a>
        </Link>
        {/* menu toggle button */}
        <label
          data-theme="mytheme"
          className="btn btn-circle bg-transparent border-0 swap swap-rotate md:hidden"
        >
          <input
            ref={checkBoxRef}
            type="checkbox"
            onChange={() => setOpen(!open)}
          />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {/* menuFlyoutRef for mobile view */}
        <CSSTransition
          in={open}
          nodeRef={menuFlyOutRef}
          timeout={1000}
          classNames="menu-transition"
          unmountOnExit
          onEnter={() => setOpen(true)}
          onExited={() => setOpen(false)}
        >
          <div
            ref={menuFlyOutRef}
            className={`w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:hidden">
              {links.map(link => (
                <li key={link.name}>
                  <a
                    className="block py-4 pl-3 pr-4 font-normal uppercase text-hover md:p-0"
                    aria-current="page"
                    onClick={() => {
                      setOpen(open => !open);
                      checkBoxRef.current.checked = false;
                      router.push(link.link);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>

        {/* menuFlyout for desktop view */}
        <ul className="hidden md:block md:flex mt-4 md:flex-row md:space-x-8 md:mt-0 text-base md:text-sm">
          {links.map(link => (
            <li key={link.name}>
              <a
                className="block py-4 pl-3 pr-4 font-medium text-white uppercase rounded hover:text-slate-300 md:p-0"
                aria-current="page"
                onClick={() => {
                  router.push(link.link);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
