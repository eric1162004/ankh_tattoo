const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-90">
      <div className="py-3 px-4 md:flex md:items-center justify-between md:justify-around">
        <span className="text-xs sm:text-center">
          © {new Date().getFullYear()} <a href="https://flowbite.com">Miki Sheir</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
