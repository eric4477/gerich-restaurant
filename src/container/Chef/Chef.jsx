import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Chef = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "opacity(0)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: "1s",
      }}
      className="app__bg app__wrapper section__padding"
    >
      <div className="app__wrapper_img app__wrapper_img-reverse ">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={"Chef’s Word"} />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="app__chef-sign">
          <h3>Kevin Luo</h3>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
