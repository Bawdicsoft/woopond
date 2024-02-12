"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./style.css";

import { EffectCube, Pagination, Autoplay } from "swiper/modules";
const imagesList = [
  "/Assests/homeAssests/slider/1.jpeg",
  "/Assests/homeAssests/slider/2.jpeg",
  "/Assests/homeAssests/slider/3.jpeg",
  "/Assests/homeAssests/slider/4.jpeg",
  "/Assests/homeAssests/slider/5.jpeg",
  "/Assests/homeAssests/slider/7.jpeg",
  "/Assests/homeAssests/slider/8.jpeg",
  "/Assests/homeAssests/slider/9.jpeg",
  "/Assests/homeAssests/slider/10.jpeg",
  "/Assests/homeAssests/slider/11.jpeg",
  "/Assests/homeAssests/slider/14.jpeg",
  "/Assests/homeAssests/slider/15.jpeg",
  "/Assests/homeAssests/slider/16.jpeg",
  "/Assests/homeAssests/slider/18.jpeg",
  "/Assests/homeAssests/slider/19.jpeg",
  "/Assests/homeAssests/slider/20.jpeg",
  "/Assests/homeAssests/slider/21.jpeg",
];

export default function HeroImagesSlider() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        height={500}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper w-[250px] md:w-full h-[320px] md:h-[300px] lg:h-[400px] xl:!h-[480px] xl:!w-96 "
      >
        {imagesList.map((image, index) => (
          <SwiperSlide
            key={index}
            className="border-2 border-lightGreen rounded-xl shadow-xl"
            style={{
              boxShadow: "1px 2px 25px 1.5px #afa",
            }}
          >
            <img src={image} className="rounded-xl h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
