import React from 'react'
import "../Styles/Testimonials.css";
 import girlsec5 from "../Assests/girlsec5.webp";
  import smily from "../Assests/smily.webp";
import pizza from "../Assests/pizza.webp";
import testpic3 from "../Assests/testpic3.webp";
import testpic2 from "../Assests/testpic2.webp";
import testpic1 from "../Assests/testpic1.webp";
 import { useEffect, useState } from 'react';
const Testimonials = () => {

  return (
    <section className="testimonials   main-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="imageback"  data-aos="fade-right" >
                        <img src={girlsec5} />

                   <div className="smilypos">
                    <img src={smily}  width={60} height={60}/>
                    </div>  
                    <div className="pizzapos">
                        <img src={pizza} width={60} height={60}/>
                        </div>  
                         {/*label up  */}
<div className="bubble-with-tail">
  Our Best Chef 😁
</div>



                         {/* labelup end */}

                    </div>

                </div>
                {/* rightcolumn */}
                <div className="col-lg-6">
                    {/* <div className="testright"> */}
                     <div className="testright" data-aos="fade-left"  >
                        <h2 className="redhead">TESTIMONIALS</h2>
                        <p className="main-heading  coutomerwidth">What Our Customers Say About Us</p>
                        <p className="main-paragraph  coustomerreview">“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                     <div className="testlastparent">
                      <div className="testpics">
                        <img src={testpic3}  width={40} height={40} className="girlstest"/>
                        <img src={testpic2}  width={40} height={40} className="girlstest"/>
                        <img src={testpic1}  width={40} height={40} className="girlstest"/>

                      </div>
                      <div className="testlast">
                        <h2 className="testlasth">Customer Feedback</h2>
                        <div className="testratefav">
                         <i className="ri-star-s-fill yellowfill"></i>
                          <p className="fav">4.6</p>
                          <p className="favparagraph">(18.6k Reviews)</p>
                          </div>

                      </div>
                      </div>

                    </div>

                </div>

                {/* rightcol end */}

            </div>

        </div>

    </section>
  )
}

export default Testimonials