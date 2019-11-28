import React from "react"

import Description from "./description"
import BackgroundImage from "gatsby-background-image"

import "./cta.css"

const Cta = ({ image, position, text }) => {

  const isRight = position === "right"
  const id = isRight ? "cta1" : "cta"

  return (
    <section className="bg-light page-section" id={id}>
      <div className="container-fluid">
        <div className="row">
          {isRight ? (
            <>
              <Description
                text={text}
                position="left"
              />
              <BackgroundImage className={`col-lg-6 cta-left vic d-none d-lg-block`} fluid={image} />
            </>
          ) : (
            <>
              <BackgroundImage className={`col-lg-6 cta-left vic d-none d-lg-block`} fluid={image} />
              <Description
                text={text}
                position="right"
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Cta
