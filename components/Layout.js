import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="w-full mx-auto">{children}</div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
