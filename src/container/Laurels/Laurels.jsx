import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
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
      className="app__laurels_awards-card"
    >
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-card-content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
};
const Laurels = () => (
  <div id="awards" className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title={"Awards & recognition"} />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => {
          return <AwardCard award={award} key={award.title} />;
        })}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
