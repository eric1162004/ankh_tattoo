const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-90">
      <div className="py-1 md:py-2 px-4 flex justify-center">
        <span className="text-xs text-center">
          © {new Date().getFullYear()} <a href="https://flowbite.com">Miki Sheir</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
