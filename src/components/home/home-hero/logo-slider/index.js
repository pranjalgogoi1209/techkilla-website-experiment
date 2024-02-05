"use client";
import React, { useState, useEffect } from "react";
import logoSliderData from "@/data/home/logoSlider";
import styles from "./logoSlider.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

export default function LogoSlider() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(logoSliderData);
    data && console.log(data);
  }, []);
  return (
    <Swiper
      spaceBetween={54}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      /* breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 50,
        },
      }} */
      className={styles.slider}
    >
      {data?.map((img, index) => (
        <SwiperSlide key={index}>
          <div className={styles.imgContainer}>
            <img src={img.src} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
