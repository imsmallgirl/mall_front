import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper";

const BestWrap = styled.section`
    padding: 50px 0;
`

const BestContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
`

const BestHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
    position: relative;
`

export const MainH2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: normal;
`

const BestBtnWrap = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

`

const BestBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    border: none;
    background-color: transparent;
    font-size: 40px;
    color: #ddd;
    cursor: pointer;
`

{/* <div className='best-contents'>
<p className='xi-heart'></p>
<dl>
    <dt>말랑 양털 후리스 조끼(11/19재입고)</dt>
    <dd>₩29,900</dd>
</dl>
</div> */}

export default function Best({product}) {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return(
        <BestWrap>
            <BestHeader>
                <MainH2>
                    BEST
                </MainH2>
                <BestBtnWrap>
                    <BestBtn left="10%" ref={navigationPrevRef} className="xi-angle-left-thin"></BestBtn>
                    <BestBtn right="10%" ref={navigationNextRef} className="xi-angle-right-thin"></BestBtn>
                </BestBtnWrap>
            </BestHeader>

            <BestContainer>
                <Swiper
                slidesPerView={6}
                loop={true}
                spaceBetween={20}
                grabCursor={true}
                navigation={{
                    enabled: true,
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl = navigationPrevRef.current
                      swiper.params.navigation.nextEl = navigationNextRef.current
            
                      swiper.navigation.destroy()
                      swiper.navigation.init()
                      swiper.navigation.update()
                    })
                  }}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false,
                // }}
                modules={[Navigation, Autoplay]}
                className="mySwiper bestSwiper"
                >
                    {product.map((item) => {
                        return <SwiperSlide key={item.id}><img src={item.image} alt={item.id} /></SwiperSlide>
                    })}
                </Swiper>
            </BestContainer>
        </BestWrap>
    )
}