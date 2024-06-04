import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="frame-parent1">
        <div className="frame-wrapper1">
          <div className="group-parent">
            <img className="group-icon1" alt="" src="C:\LANDING PAGE\landing_page\src\assets\group-1@2x.png" />
            <p className="we-build-an-container">
              <span className="we-build-an">We build an elegant solution.</span>
              <span className="our-team-created">{`Our team created a fully integrated sales `}</span>
              <span className="and-marketing-solution">
                and marketing solution for your company.
              </span>
            </p>
          </div>
        </div>
        <div className="company-parent">
          <b className="company">Company</b>
          <div className="why-use-agent-parent">
            <div className="why-use-agent1">Why Use Agent +</div>
            <div className="our-team1">Our Team</div>
            <div className="blog">Blog</div>
            <div className="careers">Careers</div>
          </div>
        </div>
        <div className="product-parent">
          <b className="product">Product</b>
          <div className="sales-software-parent">
            <div className="sales-software">Sales Software</div>
            <div className="crm">CRM</div>
            <div className="networking">Networking</div>
            <div className="customer-care">Customer Care</div>
          </div>
        </div>
        <div className="discover-parent">
          <b className="discover">Discover</b>
          <div className="partner-program-parent">
            <div className="partner-program">Partner Program</div>
            <div className="get-our-newsletter">Get our newsletter</div>
            <div className="resources">Resources</div>
            <div className="api-copy">API</div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="help-center-parent">
            <b className="help-center">Help Center</b>
            <div className="community-parent">
              <div className="community">Community</div>
              <div className="academy">Academy</div>
              <div className="support">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
