import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

// Layout support sticky navbar and footer using flex
// Allow some global css is defined here.
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-slate-100 bg-slate-100 md:text-sm">
      <div className="shrink-0">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-primary-dark to-primary-light grow">
        {children}
      </div>
      <div className="shrink-0">
        <Footer />
      </div>
      <a href="https://www.instagram.com/ankh.miki">
        <img
          className="fixed bottom-5 right-5 w-10 md:bottom-10 md:right-10"
          src="img/ig_logo.png"
        />
      </a>
    </div>
  );
};

export default Layout;
