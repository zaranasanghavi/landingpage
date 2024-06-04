import React from 'react'
import {BannerAdsStyle , FrameComponent, FrameComponent1, FrameComponent2 ,FrameComponent3, FrameComponent4, FrameComponent5 , FrameComponent6, HeroRightContent, NavbarLightStyle} from "./components"

const App = () => {
  return (
    <div className="landing-pages">
      <NavbarLightStyle />
      <section className="hero-left-wrapper">
        <div className="hero-left">
          <h2 className="agent-for-better">Agent.+ for better solutions</h2>
          <div className="sharing-some-unique-parent">
            <h1 className="sharing-some-unique">
              Sharing Some Unique Creations
            </h1>
            <div className="they-are-formed-by-e-wrapper">
              <p className="they-are-formed">
                They are formed by entrepreneurs who want to develop products
                and services that have never been done before. They are often
                funded by venture capitalists, angel investors, or crowdfunding
                campaigns like Kickstarter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-right">
        <HeroRightContent />
        <p className="the-agency-model">
          The agency model is a better solution for digital marketing design
          because it gives the client access to a team of experts who can
          generate ideas and create content.
        </p>
        <FrameComponent6 />
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className="landing-pages-inner">
        <footer className="banner-ads-style-1-parent">
          <BannerAdsStyle />
          <FrameComponent1 />
          <FrameComponent />
        </footer>
      </section>
    </div>
  );
};
export default App