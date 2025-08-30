import React from 'react'
import "../Styles/Header.css";
 import headerlogo from "../Assests/headerlogo.webp";
 import number from "../Assests/number.webp";

 

import { useEffect, useState } from 'react';

// gg ju function ata hai rafce sayusy kay ander  karna hai aldeha function nai bnana 
const Header = () => {
      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50); 
     };

     window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
   }, []);
// className={`Header ${isScrolled ? 'scrolled' : ''}`}  end header colorchange sticky

  return (
    <section  className={`Header ${isScrolled ? 'scrolled' : ''}`} >

    <div className="container">
        <div className="row">
            <div className="headerparent">
            <div className="col-lg-4">
                <div className="headerleftlogo">
                    <img src={headerlogo} width={70} />


                </div>

            </div>
            <div className="col-lg-4">
                <div className="headercenter">
                    <ul className="headlist">
                        <li><a href="#" className="activelink">Home</a></li>
                        <li  className="dropdownlink"><a href="#">Menu</a>
                      <i className="ri-arrow-drop-down-line"></i></li>
                        <li className="dropdownlink"><a href="#">Services</a> <i className="ri-arrow-drop-down-line"></i></li>
                        <li><a href="#">Offers</a></li>

                    </ul>

                </div>


            </div>
            <div className="col-lg-4">
                <div className="lastheader">
                <div className="headericons">
                    
                    <i className="ri-search-line"></i>
                    <div className="positionnum">
                    <i className="ri-shopping-bag-line"><img src={number} width={10} className="bag-number"/></i>
                    </div>

                </div>
                <div className="headerbtn">
                    <button  className="greenbtn"><i className="ri-phone-line phonesize"></i>Contact</button>

                </div>
                </div>

            </div>
            </div>

        </div>

    </div>

    </section>
  )
}

export default Header