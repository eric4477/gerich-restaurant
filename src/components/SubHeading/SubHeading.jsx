import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img className="spoon__img" src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
