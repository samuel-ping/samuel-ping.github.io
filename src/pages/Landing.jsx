import React from "react";
import Iconbar from "components/Iconbar";
import Image from "components/Image";
import "pages/Landing.css";

const Landing = (props) => {
  if (props.isMobile) {
    return (
      <>
        <div className="landing-wrapper-mobile">
          <div className="landing-border-mobile">
            <div className="name-intro-mobile">Hey! I'm Sam,</div>
            <div className="tagline-mobile">
              an aspiring CS major at Rutgers University- New Brunswick.
            </div>
            <hr className="divider" />
            <Iconbar isMobile="true" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="landing-wrapper">
          <div className="landing-left-side">
            <div className="name-intro">Hey! I'm Sam,</div>
            <div className="tagline">
              an aspiring CS major at Rutgers University- New Brunswick.
            </div>
            <hr className="divider" />
            <Iconbar />
          </div>
          <div className="landing-right-side">
            <Image isMe="true" />
          </div>
        </div>
        <div className="skewed" />
      </>
    );
  }
};

export default Landing;
