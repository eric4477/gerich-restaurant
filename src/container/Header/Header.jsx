import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      id="home"
      className="app__header app__wrapper section__padding"
    >
      <div className="app__wrapper_info ">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to Fine dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
