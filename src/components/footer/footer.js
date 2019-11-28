import React from "react"

import "./footer.css"

const Footer = ({ areaPhoneNumber }) => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Keylo Inc. 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="/">
                <i className="fab fa-facebook-f" style={{color: 'white'}} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/">
                <i className="fab fa-linkedin-in" style={{color: 'white'}} />
              </a>
            </li>
          </ul>
          <div className="contact-info">
            <a href="mailto:contact@keylo.ca">Contact@Keylo.ca</a>
            <br />
            <a href={"tel:" + areaPhoneNumber}>{areaPhoneNumber}</a>
          </div>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4" />
        <div className="col-md-4" />
        <div className="col-md-4" />
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 text-left text-muted disclaimer">
          Copyright © 2019 Keylo. Please note: The trademarks MLS®, Multiple
          Listing Service® and the associated logos are owned by The Canadian
          Real Estate Association (CREA) and identify the quality of services
          provided by real estate professionals who are members of CREA. The
          trademarks REALTORⓇ, REALTORSⓇ and the REALTORⓇ logo are controlled by
          CREA and identify real estate professionals who are members of CREA.
          Any republication, re-transmission, reproduction, downloading, storing
          or distribution of all or part of any materials found on this site is
          expressly prohibited. This material is for educational purposes only
          and may contain technical or typographical errors. Keylo does not
          guarantee its accuracy or completeness or suitability.
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
