import PropTypes from "prop-types";
import "./frame-component6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`hero-images-parent ${className}`}>
      <div className="hero-images">
        <img className="image-icon" alt="" src="C:\LANDING PAGE\landing_page\src\assets\group@2x.png" />
        <div className="benefit-one-badge">
          <div className="shape" />
          <img
            className="brand-icons-solid-shield"
            loading="lazy"
            alt=""
            src="C:\LANDING PAGE\landing_page\src\assets\brand--icons--solid--shield@2x.png"
          />
          <h1 className="best-agency-of-container">
            <p className="best-agency">Best Agency</p>
            <p className="of-the-years">of The Years</p>
          </h1>
        </div>
      </div>
      <div className="benefit-two">
        <div className="benefit-two-content">
          <img
            className="group-copy-icon"
            loading="lazy"
            alt=""
            src="C:\LANDING PAGE\landing_page\src\assets\group-copy@2x.png"
          />
          <h1 className="working-with-us">
            Working with Us to boosted your product
          </h1>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
