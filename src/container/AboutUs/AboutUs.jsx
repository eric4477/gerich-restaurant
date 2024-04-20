import "./AboutUs.css";
import { images } from "../../constants";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="about"
      ref={ref}
      className="app__aboutus app__bg flex__center section__padding"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            transitionDelay: "1s",
          }}
          className="app__aboutus-content_about"
        >
          <h1 className="headtext__cormorant">About Us</h1>
          <img className="spoon__img" src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button" type="button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife">
          <img src={images.knife} alt="knife" />
        </div>
        <div
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            transitionDelay: "1s",
          }}
          className="app__aboutus-content_history"
        >
          <h1 className="headtext__cormorant">Our History</h1>
          <img className="spoon__img" src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className="custom__button" type="button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
