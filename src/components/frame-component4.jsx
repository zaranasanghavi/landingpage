import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`empathize-content-wrapper ${className}`}>
      <div className="empathize-content">
        <div className="empathize-left">
          <div className="empathize-left-content">
            <div className="eampathize-parent">
              <h2 className="eampathize">Eampathize</h2>
              <h1 className="deep-understanding-t-container">
                <p className="deep-understanding">Deep Understanding</p>
                <p className="the-hole-problem">The Hole Problem</p>
              </h1>
            </div>
            <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
          </div>
        </div>
        <div className="empathize-right">
          <img
            className="combined-shape-icon1"
            alt=""
            src="C:\LANDING PAGE\landing_page\src\assets\combined-shape-1.svg"
          />
          <img className="image-icon1" alt="" src="C:\LANDING PAGE\landing_page\src\assets\image-1@2x.png" />
          <div className="oval" />
          <div className="empathize-chart">
            <div className="chart-background" />
            <img
              className="chart-icon"
              loading="lazy"
              alt=""
              src="C:\LANDING PAGE\landing_page\src\assets\chart.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
