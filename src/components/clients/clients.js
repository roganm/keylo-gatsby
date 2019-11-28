import React from "react"

import Img from "gatsby-image"

const Clients = ({ name, images }) => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          {images.map((image, i) => (
            <div key={i} className="col-md-3 col-sm-6">
              <div>
                <Img
                  className="img-fluid d-block mx-auto"
                  fixed={image.fixed}
                  alt={image.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients;
