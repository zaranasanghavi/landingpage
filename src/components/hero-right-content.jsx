import PropTypes from "prop-types";
import "./hero-right-content.css";

const HeroRightContent = ({ className = "" }) => {
  return (
    <div className={`hero-right-content ${className}`}>
      <img
        className="brand-pattern-wave"
        alt=""
        src="C:\LANDING PAGE\landing_page\src\assets\brand--pattern--wave@2x.png"
      />
      <div className="hero-buttons">
        <button className="button-solid-rounded-large">
          <div className="rectangle2" />
          <div className="start-project-now">Start Project Now</div>
        </button>
      </div>
      <button className="button-outline-rounded-larg">
        <div className="rectangle3" />
        <div className="start-project-now1">How It Works</div>
      </button>
    </div>
  );
};

HeroRightContent.propTypes = {
  className: PropTypes.string,
};

export default HeroRightContent;
