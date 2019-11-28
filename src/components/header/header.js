import React, { Component } from "react"
import { Link as ScrollLink, Element } from "react-scroll"

import Img from "gatsby-image"

import scrollTo from "../../utils/scroll"
import "../../index.css"
import "./header.css"

class Header extends Component {
  state = {
    visible: false,
    open: false
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const visible = currentScrollPos > 100
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  toggleNavbar = () => {
    const { open } = this.state

    this.setState({ open: !open })
  }

  render() {
    const { visible, open } = this.state
    const { provinceCode, city, logo } = this.props
    const url = `/${provinceCode}/${city}/realtors`
    return (
      <Element name="header" className="header">
        <nav
          className={`navbar navbar-expand-lg navbar-dark fixed-top ${
            visible ? "navbar-shrink" : ""
          }`}
          id="mainNav"
        >
          <div className="container">
            <ScrollLink
              className="header nav-item"
              to="header"
              onClick={() => scrollTo(0, "header")}
            >
              <div className="navbar-brand js-scroll-trigger">
                <Img className="weblogo" alt="weblogo" fixed={logo} />
              </div>
            </ScrollLink>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleNavbar}
            >
              <i className="fas fa-bars" />
            </button>
            <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <a href={url} className="nav-item">
                  <div className="nav-link js-scroll-trigger">
                    Browse REALTORS®
                  </div>
                </a>
                <ScrollLink
                  className="contact nav-item"
                  to="contact"
                  onClick={scrollTo}
                >
                  <div className="nav-link js-scroll-trigger" to="#contact">
                    Contact
                  </div>
                </ScrollLink>
                <a
                  className="nav-item"
                  href="https://agents.keylo.ca/"
                  target="blank"
                >
                  <div className="nav-link">For Agents</div>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </Element>
    )
  }
}

export default Header
