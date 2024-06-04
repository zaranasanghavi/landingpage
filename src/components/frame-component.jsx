import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper3 ${className}`}>
      <div className="path-2-parent">
        <img className="path-2-icon1" alt="" src="C:\LANDING PAGE\landing_page\src\assets\path-2-1.svg" />
        <div className="frame-wrapper4">
          <div className="copyright-2012-age-parent">
            <div className="copyright-2012-age">© Copyright 2012 Agent.+</div>
            <div className="term-0f-services-parent">
              <div className="term-0f-services">Term 0f Services</div>
              <a className="privacy">Privacy</a>
              <div className="cookies">Cookies</div>
            </div>
            <div className="C:\LANDING PAGE\landing_page\src\assets\brand--icons--outline--globe@2x.png">
              <img
                className="brand-icons-outline-glob"
                loading="lazy"
                alt=""
                src="C:\LANDING PAGE\landing_page\src\assets\brand--icons--outline--globe@2x.png"
              />
              <div className="frame-wrapper5">
                <div className="english-parent">
                  <a className="english">English</a>
                  <div className="brand-icons-outline-drop-container">
                    <img
                      className="brand-icons-outline-drop1"
                      alt=""
                      src="/C:\LANDING PAGE\landing_page\src\assets\brand--icons--outline--dropdown-1.svg--icons--outline--dropdown-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
