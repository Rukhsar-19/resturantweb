import React from 'react'
import "../Styles/Footer.css";
import headerlogo from "../Assests/headerlogo.webp";

const Footer = () => {
  return (
    <section  className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <img src={headerlogo}   width={70} />
                    <div className="footersecfirst">
                        <p className="footersecfpara">Savor the artistry where every dish is a culinary masterpiece</p>

                    </div>
             
                </div>
                <div className="col-lg-2">
                    <div className="secsecond">
                        <h2 className="listname">Useful links</h2>
                        <ul className="footersecondlist">
                      <li><a href="#">About us</a> </li>
                      <li><a href="#">Events</a> </li>
                      <li><a href="#">Blogs</a> </li>
                      <li><a href="#">FAQ</a> </li>

                        </ul>

                    </div>

                </div>
                  <div className="col-lg-3">
                    <div className="secsecond">
                        <h2 className="listname">Main Menu</h2>
                        <ul className="footersecondlist">
                      <li><a href="#">Home</a> </li>
                      <li><a href="#">Offers</a> </li>
                      <li><a href="#">Menus</a> </li>
                      <li><a href="#">Reservation</a> </li>

                        </ul>

                    </div>

                </div>
                  <div className="col-lg-3">
                    <div className="secsecond">
                        <h2 className="listname">Contact Us</h2>
                        <ul className="footersecondlist">
                      <li><a href="#">example@email.com</a> </li>
                      <li><a href="#">+64 958 248 966</a> </li>
                      <li><a href="#">Social media</a> </li>
                    

                        </ul>

                    </div>

                </div>

                <div className="col-lg-12">
                    <div className="lastsec">
                    <div className="socialicons">
                        <div className="socialcircle">
                            <i className="ri-facebook-line"></i>
                            </div>
                            <div className="socialcircle lightgreen">
                            <i className="ri-instagram-line"></i>
                            </div>
                            
                            <div className="socialcircle lightgreen">    
                           <i className="ri-twitter-line"></i>
                           </div>

                           
                            <div className="socialcircle lightgreen"> 
                            <i className="ri-youtube-line"></i>
                            </div>

                      

                    </div>
                   <div className="copy">
                    <a href="#">Copyright @2023 Dscode | All rights reserved</a>

                   </div>
                   </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Footer