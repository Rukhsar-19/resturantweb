import React from 'react'
import "../Styles/Categories.css";
// import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
//  import { Navigation } from 'swiper/modules';
import bb from "../Assests/bb.webp";


interface Props {
    data: any[];
}

const Categories = (props: Props) => {
    return (
        <section className="categories main-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="topredhead" data-aos="flip-left">
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
                            className="mySwiperNew" data-aos="zoom-in"
                        >
                            {props.data?.map((item: any) =>
                                <li key={item.id}>
                                    <SwiperSlide >
                                        <div className="whiteback">
                                            <div className="backcircle">
                                                <img src={bb} />
                                            </div>
                                            <div className="slidemain">
                                                <h2 className="slidehead">{item.restaurantName}</h2>
                                                <p className="slidepara"></p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </li>
                            )}
                            {/* <SwiperSlide>
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
                            </SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories