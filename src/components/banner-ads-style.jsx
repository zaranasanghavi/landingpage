import PropTypes from "prop-types";
import "./banner-ads-style.css";

const BannerAdsStyle = ({ className = "" }) => {
  return (
    <div className={`banner-ads-style-1 ${className}`}>
      <img className="banner-icon" loading="lazy" alt="" src="C:\LANDING PAGE\landing_page\src\assets\banner@2x.png" />
      <div className="ready-to-boost-your-parent">
        <h1 className="ready-to-boost">
          Ready to Boost Your Product on Next Level?
        </h1>
        <p className="ask-about-agent">{`Ask about Agent.+, Solutions, Our Team or anything else. `}</p>
      </div>
      <div className="banner-ads-style-1-inner">
        <div className="frame-container">
          <div className="button-solid-btn-large-wrapper">
            <button className="button-solid-btn-large">
              <div className="rectangle13" />
              <div className="start-project-now2">Start Project Now</div>
            </button>
          </div>
          <div className="free-consultation-an">
            Free Consultation and Sharing!
          </div>
        </div>
      </div>
    </div>
  );
};

BannerAdsStyle.propTypes = {
  className: PropTypes.string,
};

export default BannerAdsStyle;
