import React from "react"
import { Link } from "react-scroll"

import scrollTo from "../../utils/scroll"

const CtaDescription = ({ text, position }) => {
  return (
    <div className={`col-lg-6 cta-${position}`}>
      <div className="row">
        <div className="col-lg-12 cta-heading section-heading">
          {text}
        </div>
      </div>
      <div className="row">
        <Link
          className="contact col-lg-12 btn-container"
          to="contact"
          onClick={scrollTo}
        >
          <button className="button btn btn-success qs-button">
            Find a Local Expert
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CtaDescription
