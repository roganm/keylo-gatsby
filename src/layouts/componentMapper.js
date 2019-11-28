import React, { Component } from 'react';

import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import Cta from "../components/cta/cta"
import Portfolio from "../components/portfolio/portfolio"
import Questions from "../components/questions/questions"
import Clients from "../components/clients/clients"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"

import '../components/global.css'

class ComponentMapper extends Component {

    components = { "Header": Header, "Hero": Hero, "Services": Services, "Cta": Cta, "Portfolio": Portfolio, "Questions": Questions, "Clients": Clients, "Contact": Contact, "Footer": Footer }

    render() {
        console.log(this.props.tag)
       const TagName = this.components[this.props.tag || 'Footer']
       return <TagName { ...this.props } />
    }
}
export default ComponentMapper;