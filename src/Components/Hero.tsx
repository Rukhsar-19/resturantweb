import React from 'react'
import "../Styles/Hero.css";
import foodiegirl from "../Assests/foodiegirl.webp";
import rightlabel1 from "../Assests/rightlabel1.webp";
import rightlabel2 from "../Assests/rightlabel2.webp";
// aos
import { useEffect, useState } from 'react';

const Hero = () => {

  return (
    <section className="hero">

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* <div className="heroleft"> */}
            {/* animate on scroll the leftside of hero put the col to do this  ju div banty parent us mein*/}
            <div className="heroleft" data-aos="fade-right">
              <h2 className="herohead main-heading">Dive into Delights Of Delectable <span className="herogreen">Food</span></h2>
              <p className="heropara main-paragraph">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
              <div className="herobtn">
                <button className="greenbtn  boxshadowbtn">Order Now</button>
                <a href="#" className="watch">Watch Video</a>
                <div className="circlebtnicon">
                  <button className="circlebtn"><i className="ri-play-large-fill"></i></button>
                </div>

              </div>
            </div>

          </div>
          {/* herorightside image */}

          <div className="col-lg-6">
            <div className="heroright"data-aos="fade-left">
              <img src={foodiegirl} className="girlhero" />
              <div className="bubblepos">
                <div className="chat-bubble  redhead  lowercasehead">
                  Hot spicy Food 🌶️
                  <span className="tail"></span>
                </div>


              </div>
              {/* right side labels */}
              <div className="rightlabelparent">
                <div className="labelback">
                  <div className="imagecontainer">
                    <img src={rightlabel1} width={60} height={50} />

                    <div className="headlabel">
                      <h2 className="headheroright">Spicy noodles</h2>
                      <div className="stars">
                        <i className="ri-star-s-fill  yellowfill"></i>
                        <i className="ri-star-s-fill yellowfill"></i>
                        <i className="ri-star-s-fill yellowfill"></i>
                        <i className="ri-star-s-line grey"></i>
                        <i className="ri-star-s-line grey"></i>
                      </div>
                      <div className="labelpara">
                        <p className="dollar">$<span className='labelparalast'>18.00</span></p>

                      </div>
                    </div>
                  </div>

                </div>


                {/* 2nd label  use the same labelback only leftauto right added*/}
                <div className="labelback labelback2">
                  <div className="imagecontainer">
                    <img src={rightlabel2} width={60} height={50} />

                    <div className="headlabel">
                      <h2 className="headheroright">Vegetrain Salad</h2>
                      <div className="stars">
                        <i className="ri-star-s-fill  yellowfill"></i>
                        <i className="ri-star-s-fill yellowfill"></i>
                        <i className="ri-star-s-fill yellowfill"></i>
                        <i className="ri-star-s-fill yellowfill"></i>

                        <i className="ri-star-s-line grey"></i>
                      </div>
                      <div className="labelpara">
                        <p className="dollar">$<span className='labelparalast'>18.00</span></p>

                      </div>
                    </div>
                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero