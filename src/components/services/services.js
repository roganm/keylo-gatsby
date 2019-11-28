import React from "react"
import { Link } from "react-scroll"
import { getReactComponents } from "./helpers"

import scrollTo from "../../utils/scroll"

import "./services.css"

const Services = ({ name, fullName, pageType, sectionData }) => {

    let tokensToReplace, buttonText

    if (pageType === "top-real-estate-agents") {
        buttonText = "Find Me an Agent"

        tokensToReplace = {
            "{city}": name,
            "{fullName}": fullName,
            "{realtorWord}": "Real Estate Agent",
            "{realtorsWord}": "Real Estate Agents",
            "{possessiveWord}": "Real Estate Agent’s"
        }

    } else {
        buttonText = "Find Me a REALTOR®"

        tokensToReplace = {
            "{city}": name,
            "{fullName}": fullName,
            "{realtorWord}": "REALTOR®",
            "{realtorsWord}": "REALTORS®",
            "{possessiveWord}": "REALTOR®’s"
        }       
    }
    
    let componentsToRender = []

    sectionData.forEach((item, i) => {
        let newComponent =  
            <div key={i} className="container looking-container">
                <div className="row">
                    <div className="col-lg-12">
                        {getReactComponents(item.content.content, tokensToReplace)}
                    </div>
                </div>
                <div className="row">
                    <Link className="contact" to="contact" onClick={scrollTo}>
                    <div className="col-lg-12 btn-container">
                        <button className="button btn btn-outline-success qs-button">
                        {buttonText}
                        </button>
                    </div>
                    </Link>
                </div>
            </div>
    
        componentsToRender.push(newComponent)
    })

    return (
        <section className="bg-light page-section" id="looking">
            {componentsToRender}
        </section>
    )
}

export default Services
