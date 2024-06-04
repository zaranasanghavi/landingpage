import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`define-content-wrapper ${className}`}>
      <div className="define-content1">
        <div className="combined-shape-copy-parent">
          <img
            className="C:\LANDING PAGE\landing_page\src\assets\combined-shape-1.svg"
            loading="lazy"
            alt=""
            src="/combined-shape-1.svg"
          />
          <div className="oval-copy" />
          <div className="tools-asana">
            <div className="rectangle6" />
            <div className="image-logo" />
          </div>
          <div className="tools-zoom">
            <div className="rectangle7" />
            <div className="rectangle8" />
          </div>
          <div className="tools-notion">
            <div className="rectangle-copy-21" />
            <div className="rectangle9" />
          </div>
          <div className="bitmap-parent">
            <img className="bitmap-icon" alt="" src="C:\LANDING PAGE\landing_page\src\assets\bitmap@2x.png" />
            <div className="tools-figma">
              <div className="rectangle-copy-31" />
              <div className="rectangle10" />
            </div>
          </div>
        </div>
        <div className="define-content-inner">
          <div className="frame-group">
            <div className="define-parent">
              <h2 className="define">Define</h2>
              <h1 className="collaborate-efficien">Collaborate Efficiently</h1>
            </div>
            <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
