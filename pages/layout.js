import { useState, useEffect } from "react";
import Footer from "../components/footer";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import MobileNavBar from "../components/MobileNavBar/MobileNavBar";
import TopNavBar from "../components/TopNavBar";

const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });

  // Set hasMounted to true after the component has mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // If not mounted, render nothing or a fallback (to prevent mismatches)
  if (!hasMounted) {
    return null; // Or <div>Loading...</div>
  }

  return (
    <section className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start mix-blend-normal leading-[normal] tracking-[normal]">
      {isDesktopOrLaptop ? <TopNavBar /> : <MobileNavBar />}
      {children}
      <Footer />
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
