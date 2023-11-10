import Navbar from "../components/commons/Navbar/Navbar";
import PreFooter from "../components/commons/PreFooter/PreFooter";
import Footer from "../components/commons/Footer/Footer";

export const Layout = ({ children, filters }) => {
  return (
    <>
      <Navbar filters={filters}/>
      <main>{children}</main>
      <PreFooter />
      <Footer />
    </>
  );
};
