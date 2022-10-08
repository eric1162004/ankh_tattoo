import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const links = [
    { name: "MIKI SHEIR", link: "/" },
    { name: "TATTOO GALLERY", link: "/tattoo_gallery" },
    { name: "TATTOO FAQ", link: "/tattoo_faq" },
    { name: "GET A QUOTE", link: "/get_a_quote" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="z-50 p-2 text-2xl bg-primary sm:py-1 md:text-xl">
      <div className="flex flex-wrap items-center justify-between md:mx-5">
        {/* brand logo */}
        <Link href="/">
          <a className="flex items-center">
            <span className="self-center m-1 font-semibold md:m-1 whitespace-nowrap md:tracking-widest">
              Miki@ANKI
            </span>
          </a>
        </Link>
        {/* menu toggle button */}
        <button
          data-collapse-toggle="mobile-menu"
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* menu list */}
        <div
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
          onClick={() => setOpen(!open)}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-base md:text-sm">
            {links.map(link => (
              <li key={link.name}>
                <Link href={link.link}>
                  <a
                    className="block py-4 pl-3 pr-4 font-medium text-white uppercase rounded hover:text-slate-300 md:p-0"
                    aria-current="page"
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
