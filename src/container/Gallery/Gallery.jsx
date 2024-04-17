import { SubHeading } from "../../components";
import { images } from "../../constants";
import { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const imagesArr = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title={"Instagram"} />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button" type="button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div ref={scrollRef} className="app__gallery-images_container">
          {imagesArr.map((image, index) => (
            <div
              key={`gallery_image-${index + 1}`}
              className="app__gallery-image_card flex__center"
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_btns">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
