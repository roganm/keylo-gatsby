import React from "react"

import BackgroundImage from "gatsby-background-image"

import "./hero.css"

import key from "../../images/key.svg"
import introArrow from "../../images/arrow_down.svg"

const Hero = ({ name, fullName, pageType, headerImage }) => {
  let header

  if (pageType === "top-real-estate-agents") {
    header = `We Make it Easy to Find Top Real Estate Agents in ${fullName}`
  } else {
    header = `We Make it Easy to Find The Top REALTORS® in ${fullName}`
  }

  return (
    <BackgroundImage
      Tag="header"
      className="masthead container-fluid"
      style={{ backgroundAttachment: "fixed" }}
      fluid={headerImage}
    >
      <div>
        <img className=" intro-key" src={key} alt="Keylo Key Logo" />
        <div className="intro-text">
          <div className="intro-heading">Welcome to Keylo</div>
          <div className="intro-location">{name}</div>
          <div className="intro-line" />
          <h1 className="intro-description">{header}</h1>
          <div className="intro-arrow-text">FAST & FREE SERVICE</div>
          <img src={introArrow} alt="introduction" className="intro-arrow" />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
