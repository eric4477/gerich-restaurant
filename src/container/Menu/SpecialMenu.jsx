import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SpecialMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      id="menu"
      className="app__specialMenu flex__center section__padding"
    >
      <div className="app__specialMenu-title">
        <SubHeading title={"Menu that fits you palatte"} />
        <h1 className="headtext__cormorant">Today’s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_left">
          <h3 className="app__specialMenu-menu_heading">Wine & Beer</h3>
          <div
            className="app__specialMenu-menu_items"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "1.2s",
            }}
          >
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__specialMenu-menu_right">
          <h3 className="app__specialMenu-menu_heading">Cocktails</h3>
          <div
            className="app__specialMenu-menu_items"
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "1.2s",
            }}
          >
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
