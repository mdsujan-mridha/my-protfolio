import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { RiMenu5Fill } from "react-icons/ri"
import './Header.css'

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Services",
    url: "#services",
  },
  {
    display: "Protfolio",
    url: "#protfolio",
  },
  {
    display: "Contac",
    url: "#contact",
  },
  {
    display: "Blog",
    url: "#blog",
  },
];
const Header = () => {
 const headerRef = useRef(null);
 useEffect( ()=>{
   window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header-shrink')
      } else{
        window.removeEventListener('scroll')
      }

   })
 } ,[])
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo"> <h5> SUJAN </h5></div>
        <div className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((item, index) => (
              <li className="nav-item" key={index}>
                <a href={item.url}>{item.display}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-right d-flex align-items-center gap-4">
            <button className="btn">let's Talk </button>
            <span className="mobile-menu"> <i> < RiMenu5Fill/> </i> </span>
        </div>
        </div>
        
      </Container>
    </header>
  );
};

export default Header;
