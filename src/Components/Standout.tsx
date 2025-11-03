import React from 'react'
import "../Styles/Standout.css";
// import "swiper/css";
//  import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import standoutpic1 from "../Assests/standoutpic1.webp";
import standoutpic2 from "../Assests/standoutpic2.webp";
import standoutpic3 from "../Assests/standoutpic3.webp";
import { IMenu } from '../@types/ApiResponse';

interface Props {
  data: any[];
  loading: boolean;
}

const Standout = (props: Props) => {
  return (
    <section className="standout main-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="redhead" data-aos="fade-up">Special Dishes</h2>
          </div>
          <div className="col-lg-6">
            <div className="standouthead" data-aos="fade-up">
              <h2 className=" main-heading standoutmain">Standout Dishes From Our Menu</h2>
            </div>
          </div>
          {/* swiper arrows */}
          <div className="col-lg-6">
            <div className="parentswiperbtn" data-aos="fade-up">
              <div className="buttongap">
                <div className="buttonsround custom-prev">
                  <i className="ri-arrow-left-s-line"></i>
                </div>
                <div className="buttonsround  activecolor custom-next">
                  <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
            </div>
          </div>
          {/* swiper */}
          <div className="col-lg-12">
            <Swiper
              // navigation={true}
              modules={[Navigation]}
              //
              spaceBetween={10}
              slidesPerView={3}
              // centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev ',
              }}
              className="mySwiper" data-aos="zoom-out"
            >
              {/* 1st slide */}
              {props.data?.map((item: any) => (
                <li key={item.id}>
                  <SwiperSlide >
                    <div className="dishesback">
                      {/* label */}
                      <div className="labelcontainer">
                        <div className="label-with-heart">
                          <i className="ri-heart-fill heart-icon"></i>
                        </div>
                      </div>
                      <div className="dishimage">
                        <img src={item.imageUrl} alt={item.name} />
                      </div>
                      <div className="dishesnames">
                        <h2 className="disheshead">{item.itemName}</h2>
                        <h2 className="dishesdesc">{item.itemDescription}</h2>
                        <div className="dishesprice">
                          <p className="dollarsign">
                            $<span className="pricefav">{item.itemPrice}</span>
                          </p>
                          <div className="starsdish">
                            <i className="ri-star-s-fill yellowfill"></i>
                            <p className="fav">{item.rating}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </li>
              ))}

              {/* <SwiperSlide>
                <div className="dishesback">
                  <div className="labelcontainer">
                    <div className="label-with-heart">
                      <i className="ri-heart-3-line  heart-icon"></i>
                    </div>
                  </div>
                  <div className="dishimage">
                    <img src={standoutpic2} />
                  </div>
                  <div className="dishesnames">
                    <h2 className="disheshead">Vegetable salad</h2>
                    <h2 className="dishesdesc">Description of the item</h2>
                    <div className="dishesprice">
                      <p className="dollarsign">$<span className='pricefav'>26.00</span></p>
                      <div className="starsdish">
                        <i className="ri-star-s-fill  yellowfill"></i>
                        <p className="fav">4.6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dishesback">
                  <div className="labelcontainer">
                    <div className="label-with-heart">
                      <i className="ri-heart-3-line  heart-icon"></i>
                    </div>
                  </div>
                  <div className="dishimage">
                    <img src={standoutpic3} />
                  </div>
                  <div className="dishesnames">
                    <h2 className="disheshead">Egg vegi salad</h2>
                    <h2 className="dishesdesc">Description of the item</h2>
                    <div className="dishesprice">
                      <p className="dollarsign">$<span className='pricefav'>23.00</span></p>
                      <div className="starsdish">
                        <i className="ri-star-s-fill  yellowfill"></i>
                        <p className="fav">4.2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dishesback">
                  <div className="labelcontainer">
                    <div className="label-with-heart">
                      <i className="ri-heart-fill heart-icon"></i>
                    </div>
                  </div>
                  <div className="dishimage">
                    <img src={standoutpic1} />
                  </div>
                  <div className="dishesnames">
                    <h2 className="disheshead">Fattoush salad</h2>
                    <h2 className="dishesdesc">Description of the item</h2>
                    <div className="dishesprice">
                      <p className="dollarsign">$<span className='pricefav'>26.00</span></p>
                      <div className="starsdish">
                        <i className="ri-star-s-fill  yellowfill"></i>
                        <p className="fav">4.9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="dishesback">
                  <div className="labelcontainer">
                    <div className="label-with-heart">
                      <i className="ri-heart-fill heart-icon"></i>
                    </div>
                  </div>
                  <div className="dishimage">
                    <img src={standoutpic1} />
                  </div>
                  <div className="dishesnames">
                    <h2 className="disheshead">Fattoush salad</h2>
                    <h2 className="dishesdesc">Description of the item</h2>
                    <div className="dishesprice">
                      <p className="dollarsign">$<span className='pricefav'>26.00</span></p>
                      <div className="starsdish">
                        <i className="ri-star-s-fill  yellowfill"></i>
                        <p className="fav">4.9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Standout;