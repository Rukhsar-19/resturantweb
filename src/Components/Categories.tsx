import React from 'react'
import "../Styles/Categories.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
//  import { Navigation } from 'swiper/modules';
import bb from "../Assests/bb.webp";


interface Props {
    result: any[]
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
                            className="mySwiper newSwip" data-aos="zoom-in"
                        >
                            {/* {props.result?.map((item: any) => (
                                <li key={item.id}>
                                    <SwiperSlide>
                                        <div className="whiteback">
                                            <div className="backcircle">
                                                <img src={item.image} />
                                            </div>
                                            <div className="slidemain">
                                                <h2 className="slidehead">{item.restaurantID}</h2>
                                                <h3>{item.restaurantID}</h3>
                                                <p className="slidepara">{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </li>
                            ))} */}
                            {props.result?.map((item: any, index: number) => (
                                <SwiperSlide key={`${item.id}-${index}`}>
                                    <div className="whiteback">
                                        <div className="backcircle">
                                            <img src={bb} alt={item.name} />
                                        </div>
                                        <div className="slidemain">
                                            <h2 className="slidehead">{item.parkingLot}</h2>
                                            <h3>{item.restaurantID}</h3>
                                            <p className="slidepara">{item.address}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories