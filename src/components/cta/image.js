import React from "react"

const CtaImage = ({ path, position }) => (
  <div
    className={`col-lg-6 ${position} vic d-none d-lg-block`}
    style={{ backgroundImage: `url(${path})` }}
  />
)

export default CtaImage
