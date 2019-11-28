import React, { Component } from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Modal from "./modal"

import key from "../../images/key.svg"
import "./portfolio.css"

/**
 * Portfolio class which renders the grid of sub-regions on the page
 *
 * @class Portfolio
 * @extends {Component}
 */
class Portfolio extends Component {
  state = {
    open: undefined,
  }

  open = selected => {
    this.setState(prevState => ({
      open: prevState.open === selected ? undefined : selected,
    }))

    document.body.classList.add("modal-open")

    // prevents layout reflow from removing scrollbar
    // should be included in modal-open class
    document.body.style.paddingRight = '15px'
  }

  close = () => {
    this.setState({
      open: undefined,
    })

    document.body.classList.remove("modal-open")
    document.body.style.paddingRight = '0px'
  }

  render() {
    const { fullName, description, images, realtorsWord } = this.props
    const { open } = this.state

    let regionClass

    if (images.length >= 6) {
      regionClass = "col-xl-4 col-lg-6 portfolio-item"
    } else {
      regionClass = "col-xl-6 col-lg-6 portfolio-item"
    }

    let modals = null

    if (images[0].regionDescription) {
      modals = images.map((image, i) => 
        <Modal
          key={i}
          name={image.regionName}
          description={JSON.parse(image.regionDescription.regionDescription)}
          id={i}
          open={open === i}
          close={this.close}
          realtorsWord={realtorsWord}
        />
      )
    }

    return (
      <>
        {modals}
        <section className="bg-light page-section" id="portfolio">
          <div className="container communities-container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="region-container">
                  <div className="gv section-heading">
                    {fullName.charAt(0).toUpperCase() + fullName.slice(1)}
                  </div>
                  <div className="line" />
                </div>
                <div className="section-subheading text-left">
                  <div children={documentToReactComponents(description)} />
                </div>
              </div>
            </div>
            <div className="row">
              {images.map((image, i) => (
                <div key={i} className={regionClass}>
                  <div className="portfolio-caption">
                    <p>{image.regionName}</p>
                  </div>
                  <div
                    className={(modals) ? "portfolio-link modals" : "portfolio-link"}
                    data-toggle="modal"
                    data-target={`#portfolioModal${i}`}
                    onClick={(modals) ? () => this.open(i) : null}
                  >
                    {(modals) ? <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <img
                          src={key}
                          className="keylo-key"
                          alt="Keylo Key Logo"
                        />
                      </div>
                    </div> : null }
                    <Img
                      className="img-fluid"
                      fluid={image.regionImage.fluid}
                      alt={image.regionImage.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
}

Portfolio.protoTypes = {
  fullname: PropTypes.string.isRequired,
  realtorsWord: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
}

export default Portfolio
