import PropTypes from "prop-types";
import "./frame-component5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`client-content-wrapper ${className}`}>
      <div className="client-content">
        <div className="content-data-style-1">
          <div className="client-titles-content-parent">
            <b className="client-titles-content">4000 +</b>
            <div className="our-clients">Our Clients</div>
          </div>
          <div className="grocery-parent">
            <b className="grocery">12 +</b>
            <div className="unicorn-awards">Unicorn Awards</div>
          </div>
          <div className="pm-belanja-di-parent">
            <b className="pm-belanja">328 +</b>
            <div className="project-complete">Project Complete</div>
          </div>
          <div className="parent">
            <b className="b">72 +</b>
            <div className="creative-people">Creative People</div>
          </div>
        </div>
        <div className="solution-content-wrapper">
          <div className="solution-content">
            <img
              className="brand-pattern-wave-copy"
              alt=""
              src="C:\LANDING PAGE\landing_page\src\assets\brand--pattern--wave@2x.png"
            />
            <div className="content-solution">
              <div className="rectangle4" />
              <div className="rectangle-copy-3" />
              <div className="rectangle-copy-2" />
              <div className="solution-description">
                <div className="solution-description-content">
                  <img
                    className="combined-shape-icon"
                    loading="lazy"
                    alt=""
                    src="C:\LANDING PAGE\landing_page\src\assets\combined-shape.svg"
                  />
                  <h1 className="our-revolutionary-ap">
                    Our Revolutionary Approach
                  </h1>
                  <p className="by-our-data">
                    By our data we can makes a revolutionary approach system to
                    bring up product to next levels
                  </p>
                  <img
                    className="path-icon"
                    loading="lazy"
                    alt=""
                    src="src/assets/path.svg"
                  />
                  <img
                    className="path-copy-2"
                    loading="lazy"
                    alt=""
                    src="/C:\LANDING PAGE\landing_page\src\assets\path-copy-2.svgpath-copy-2.svg"
                  />
                </div>
              </div>
              <div className="rectangle-copy" />
              <div className="solution-process">
                <div className="product-solution-analyze">
                  <div className="rectangle5" />
                  <img
                    className="scan-icon"
                    loading="lazy"
                    alt=""
                    src="C:\LANDING PAGE\landing_page\src\assets\scan.svg"
                  />
                  <div className="analyze-product-parent">
                    <b className="analyze-product">Analyze Product</b>
                    <p className="the-better-solution">{`The better solution for digital marketing design and ads is to use a design agency that has a team of expert designers. `}</p>
                  </div>
                </div>
                <div className="define-problem">
                  <div className="define-content">
                    <div className="document-icon">
                      <img
                        className="document-icon1"
                        alt=""
                        src="C:\LANDING PAGE\landing_page\src\assets\document@2x.png"
                      />
                    </div>
                    <div className="define-the-problem-parent">
                      <h2 className="define-the-problem">Define the Problem</h2>
                      <p className="the-better-solution1">{`The better solution for digital marketing design and ads is to use a design agency that has a team of expert designers. `}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="design-product">
                <div className="design-content">
                  <div className="graph-activity-icons">
                    <img
                      className="graph-icon"
                      loading="lazy"
                      alt=""
                      src="src/assets/graph.svg"
                    />
                    <img
                      className="activity-icon"
                      loading="lazy"
                      alt=""
                      src="C:\LANDING PAGE\landing_page\src\assets\activity@2x.png"
                    />
                  </div>
                  <div className="design-titles-parent">
                    <div className="design-titles">
                      <h2 className="design-product1">Design Product</h2>
                      <p className="the-better-solution2">{`The better solution for digital marketing design and ads is to use a design agency that has a team of expert designers. `}</p>
                    </div>
                    <div className="design-titles1">
                      <b className="testing">Testing</b>
                      <p className="the-better-solution3">{`The better solution for digital marketing design and ads is to use a design agency that has a team of expert designers. `}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
