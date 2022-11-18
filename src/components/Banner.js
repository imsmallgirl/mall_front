import React, {useState, useEffect} from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import banner1 from '../assets/banner1.jpeg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpeg'
import banner4 from '../assets/banner4.jpeg'
import banner5 from '../assets/banner5.jpeg'

function Banner () {

    // const TOTAL_SLIDES = 4;
    // const [bannerIndex, setBannerIndex] = useState(0);
    // const slideRef = useRef(null)

    // const BannerLeftSlider = () => {
    //     if (bannerIndex === 0){
    //         setBannerIndex(TOTAL_SLIDES)
    //     }else{
    //         setBannerIndex(bannerIndex - 1);
    //     }
    //     console.log(bannerIndex)
    // }

    // const BannerRightSlider = () => {
    //     if (bannerIndex >= TOTAL_SLIDES) {
    //         setBannerIndex(0)
    //     }else{
    //         setBannerIndex(bannerIndex + 1)
    //     }
    //     console.log(bannerIndex)
    // }

    // useEffect(() => {
    //     slideRef.current.style.transition = "all .5s ease-in-out";
    //     slideRef.current.style.transform = `translateX(-${bannerIndex}00vw)`
    // }, [bannerIndex])

    return (
        <>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {

                return '<span class=\"' + className + '\">' + 'New' + '</span>';
      
              }
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner5} />
          </SwiperSlide>
        </Swiper>
      </>
    )
}

export default Banner;