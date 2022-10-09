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
              ANKH.Miki
            </span>
          </a>
        </Link>
        {/* menu toggle button */}
        <label className="btn btn-circle swap swap-rotate md:hidden">
          <input type="checkbox" onChange={() => setOpen(!open)} />

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
