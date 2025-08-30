import React from 'react'
import "../Styles/Ourjourney.css";
  import journeyrightpic1 from "../Assests/journeyrightpic1.webp";
  import journeyrightpic2 from "../Assests/journeyrightpic2.webp";
  import journeyrightpic3 from "../Assests/journeyrightpic3.webp";
  import journeyrightpic4 from "../Assests/journeyrightpic4.webp";

const Ourjourney = () => {
  return (
   <section className="ourjourney main-padding"> 
   <div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="journeyleft" data-aos="fade-up-right">
                <h2 className="redhead  gapspace">Our Story & Services</h2>
                <p className="main-heading  clinicalhead">Our Culinary Journey And Services</p>
                <p className="main-paragraph  journeypara">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
               <div className="explorebtn">
                  <button  className="greenbtn">Explore</button>

               </div>
            </div>

        </div>
        <div className="col-lg-6">
            <div className="serviceparent"  data-aos="fade-up-left">
                <div className="firstrowparent">
            <div className="serviceback">
                <div className="serviceimg">
                    <img src={journeyrightpic1}  width={50}  height={50}/>

                </div>
                <div className="namesservice">
                    <h2 className="servicehead">Catering</h2>
                    <p className="servicepara">Delight your guests with our flavors and  presentation</p>

                </div>
                </div>
               {/* 2 */}
 <div className="serviceback">
                <div className="serviceimg">
                    <img src={journeyrightpic2}  width={50}  height={50}/>

                </div>
                <div className="namesservice">
                    <h2 className="servicehead">Fast delivery</h2>
                    <p className="servicepara">We deliver your order promptly to your doo</p>

                </div>
                </div>
               {/* 2 */}
              </div>



               {/* 3 */}
              <div className="secondrowparent">
             <div className="serviceback">
                <div className="serviceimg">
                    <img src={journeyrightpic3}  width={50}  height={50}/>

                </div>
                <div className="namesservice">
                    <h2 className="servicehead">Online Ordering</h2>
                    <p className="servicepara">Explore menu & order with ease using our Online Ordering </p>

                </div>
                </div>
               {/* 3 */}


               {/* 4 */}
 <div className="serviceback">
                <div className="serviceimg">
                    <img src={journeyrightpic4}  width={50}  height={50}/>

                </div>
                <div className="namesservice">
                    <h2 className="servicehead">Gift Cards</h2>
                    <p className="servicepara">Give the gift of exceptional dining with Foodi Gift Cards</p>

                </div>
                </div>
                </div>
               {/* 4 */}
            </div>

        </div>

    </div>

   </div>

   </section>
  )
}

export default Ourjourney