import React, { Component } from "react"
import { Link } from "react-scroll"
import { BLOCKS } from "@contentful/rich-text-types"
import { getReactComponents } from "./helpers"

import scrollTo from "../../utils/scroll"

import key from "../../images/key.svg"
import "./questions.css"

class Questions extends Component {
  state = {
    open: undefined,
  }
  
  open = selected => {
    this.setState(prevState => ({
      open: prevState.open === selected ? undefined : selected,
    }))
  }

  render() {
    const { name, provinceCode, creaStatsPage, pageType, sectionData } = this.props
    const { open } = this.state

    let tokensToReplace

    if (pageType === "top-real-estate-agents") {

        tokensToReplace = {
            "{city}": name,
            "{prov}": provinceCode.toLowerCase(),
            "{realtorWord}": "Real Estate Agent",
            "{realtorsWord}": "Real Estate Agents",
            "{possessiveWord}": "Real Estate Agent’s",
            "{creaStatsPage}": creaStatsPage
        }

    } else {

        tokensToReplace = {
            "{city}": name,
            "{prov}": provinceCode.toLowerCase(),
            "{realtorWord}": "REALTOR®",
            "{realtorsWord}": "REALTORS®",
            "{possessiveWord}": "REALTOR®’s",
            "{creaStatsPage}": creaStatsPage
        }       
    }

    const options = {
        renderNode: {
            [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
            [BLOCKS.HEADING_2]: (node, children) => <>{children}</>,
        },
    }

    let componentsToRender = []

    sectionData.forEach((item, i) => {
        let [ headingComponent, contentComponent ] = getReactComponents(item.content.content, tokensToReplace, options)

        let newComponent =  
            <div key={i}>
                <div className="faq-question" onClick={() => this.open("q" + i)}>
                    <i className="fa fa-plus qs-plus"> </i>
                    {headingComponent}
                </div>
                <div className={`${open === "q" + i ? "open" : "hidden"}`}>
                    {contentComponent}
                </div>
                <div className="faq-line" />
            </div>

        componentsToRender.push(newComponent)
    })

    return (
      <section className="bg-light page-section" id="faq">
        <div className="container">
          <div className="faq-heading text-uppercase text-center">
            Got Questions? Keylo's got answers!
            <img className="intro-key" src={key} alt="Keylo Key Logo" />
          </div>
          <div className="row">
            <div className="col-lg-12 mx-auto">
                {componentsToRender}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 more-qs">
              <p>Have another question?</p>
            </div>
          </div>
          <div className="row">
            <Link
              className="contact col-lg-12 btn-container"
              to="contact"
              onClick={scrollTo}
            >
              <button className="button btn btn-outline-success js-scroll-trigger qs-button">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Questions
