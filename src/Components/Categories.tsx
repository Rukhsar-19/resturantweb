import React from 'react'
import "../Styles/Categories.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
//  import { Navigation } from 'swiper/modules';
import bb from "../Assests/bb.webp";
import ii from "../Assests/ii.webp";
import hh from "../Assests/hh.webp";
import categrory3 from "../Assests/categrory3.webp";
const Categories = () => {
    return (
        <section className="categories main-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="topredhead"data-aos="flip-left">
                            <h2 className="redhead">Customer Favorites</h2>
                            <h2 className="main-heading">Popular Catagories</h2>

                        </div>

                    </div>
                    {/* swiper categories */}
                    <div className="col-lg-12">
                        <Swiper 
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            className="mySwiper" data-aos="zoom-in"
                        >
                            {/* 1st slide */}

                            <SwiperSlide>

                                <div className="whiteback">

                                    <div className="backcircle">
                                        <img src={bb} />

                                    </div>

                                    <div className="slidemain">
                                        <h2 className="slidehead">Main Dish</h2>
                                        <p className="slidepara">(86 dishes)</p>
                                    </div>

                                </div>


                            </SwiperSlide>
                            {/* 1st slide end */}

                            {/* 2nd slide start */}
                            <SwiperSlide>

                                <div className="whiteback">

                                    <div className="backcircle">
                                        <img src={categrory3} />

                                    </div>

                                    <div className="slidemain">
                                        <h2 className="slidehead">Break Fast</h2>
                                        <p className="slidepara">(12 break fast)</p>
                                    </div>

                                </div>


                            </SwiperSlide>

                            {/* 2nd slide end */}
                            {/* 3rd slide */}
                            <SwiperSlide>

                                <div className="whiteback">

                                    <div className="backcircle">
                                        <img src={ii} />

                                    </div>

                                    <div className="slidemain">
                                        <h2 className="slidehead">Dessert</h2>
                                        <p className="slidepara">(48 dessert)</p>
                                    </div>

                                </div>


                            </SwiperSlide>
                            {/* 3rd slide */}
                            {/* 4 slide */}
                            <SwiperSlide>

                                <div className="whiteback">

                                    <div className="backcircle">
                                        <img src={hh} />

                                    </div>

                                    <div className="slidemain">
                                        <h2 className="slidehead">Browse All</h2>
                                        <p className="slidepara">(255 Items)</p>
                                    </div>

                                </div>


                            </SwiperSlide>
                            {/* 4 slide */}

                            {/* 5slide */}
                            <SwiperSlide>

                                <div className="whiteback">

                                    <div className="backcircle">
                                        <img src={hh} />

                                    </div>

                                    <div className="slidemain">
                                        <h2 className="slidehead">Browse All</h2>
                                        <p className="slidepara">(255 Items)</p>
                                    </div>

                                </div>


                            </SwiperSlide>

                            {/* 5 slide */}


                        </Swiper>



                    </div>



                </div>


            </div>


        </section>
    )
}

export default Categories