import React, { Fragment } from 'react';
import Header from '../Header/Header';
import "../../App.css";
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Protfolio from '../Protfolio/Protfolio';
import Contact from '../Contact/Contact';
const Layout = () => {
    return <Fragment>
        <Header />
        <Hero />
        <About />
        <Services />
        <Protfolio />
        <Contact />
    </Fragment>
             
};

export default Layout;