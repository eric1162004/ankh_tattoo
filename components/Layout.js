import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

// Layout support sticky navbar and footer using flex
// Allow some global css is defined here.
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-slate-100 bg-slate-100">
      <div className="shrink-0">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-primary-dark to-primary-light grow">
        {children}
      </div>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
