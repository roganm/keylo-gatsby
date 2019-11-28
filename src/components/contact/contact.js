import React from "react"
import { Element } from "react-scroll"

import BackgroundImage from "gatsby-background-image"

import ContactForm from "./form"

import "./contact.css"

const Contact = ({ name, areaPhoneNumber, city, provinceCode, image }) => (
  <Element name="contact" className="contact">
    <BackgroundImage Tag="section" id="contact" className="page-section vic" fluid={image}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="contact-heading section-heading text-uppercase">
              Keylo {name}
            </div>
            <div className="contact-subheading section-subheading">
              Complete the form and we can get started.
            </div>
            <p className="info">Contact us via email or phone.</p>
            <div className="contact-info">
              <a href="mailto:contact@keylo.ca">Contact@Keylo.ca</a>
              <br />
              <a href={"tel:" + areaPhoneNumber}>{areaPhoneNumber}</a>
            </div>
          </div>
        </div>
        <ContactForm city={city} provinceCode={provinceCode} areaPhoneNumber={areaPhoneNumber} />
      </div>
    </BackgroundImage>
  </Element>
)

export default Contact
