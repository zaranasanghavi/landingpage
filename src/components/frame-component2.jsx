import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`content-partner-wrapper ${className}`}>
      <div className="content-partner">
        <div className="rectangle11" />
        <div className="already-helped-compa-wrapper">
          <b className="already-helped-compa">
            Already Helped Company Partner Arround the World
          </b>
        </div>
        <div className="rectangle-parent">
          <div className="rectangle12" />
          <div className="rectangle-copy-4" />
          <div className="rectangle-copy-5" />
          <div className="rectangle-copy-6" />
          <div className="rectangle-copy-7" />
          <div className="rectangle-copy-8" />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
