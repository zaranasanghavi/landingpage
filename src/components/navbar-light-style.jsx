import PropTypes from "prop-types";
import "./navbar-light-style.css";

const NavbarLightStyle = ({ className = "" }) => {
  return (
    <header className={`navbar-light-style-1 ${className}`}>
      <div className="rectangle" />
      <div className="navbar-light-style-1-inner">
        <div className="frame-parent">
          <div className="group-wrapper">
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="C:\LANDING PAGE\landing_page\src\assets\group@2x.png"
            />
          </div>
          <div className="why-use-agent-titles">
            <a className="why-use-agent">Why Use Agent +</a>
          </div>
          <div className="brand-icons-outline-drop-wrapper">
            <img
              className="brand-icons-outline-drop"
              loading="lazy"
              alt=""
              src="C:\LANDING PAGE\landing_page\src\assets\brand--icons--outline--dropdown-1.svg"
            />
          </div>
          <div className="frame-wrapper">
            <div className="our-team-parent">
              <a className="our-team">Our Team</a>
              <a className="solution">Solution</a>
            </div>
          </div>
          <div className="why-use-agent-titles1">
            <a className="faq">FAQ</a>
          </div>
          <div className="why-use-agent-titles2">
            <a className="contact-sales">Contact Sales</a>
          </div>
          <div className="button-solid-rounded-small">
            <div className="rectangle1" />
            <a className="start-a-project">Start a Project?</a>
          </div>
        </div>
      </div>
      <img className="path-2-icon" loading="lazy" alt="" src="C:\LANDING PAGE\landing_page\src\assets\path-2.svg" />
    </header>
  );
};

NavbarLightStyle.propTypes = {
  className: PropTypes.string,
};

export default NavbarLightStyle;
