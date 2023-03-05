import React, { useEffect, useState } from "react";

import tw from "tailwind-styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Scrollbar,
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const FavText = tw.div`
  w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] text-white absolute left-0 bottom-0 p-8 pt-[34px] text-2xl font-bold leading-[1.2] max-[1280px]:p-5 max-[1280px]:text-xl
`;
const FavAddress = tw.span`
  text-base opacity-50 font-thin
`;

const Slide = ({ data }) => {
  const [slideArray, setSlideArray] = useState([]);

  useEffect(() => {
    console.log("데이터 입니다. ", data);
    setSlideArray(data);
  }, []);

  console.log("슬라이드 어레이 출력", slideArray);

  return (
    <div className="flex items-start gap-6 mt-[60px]">
      <Swiper
        navigation={true}
        spaceBetween={20}
        slidesPerView={1.5}
        freeMode={true}
        scrollbar={true}
        observer={true}
        observeParents={true}
        slidesOffsetAfter={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          600.1: {
            slidesPerView: 2,
            slidesOffsetAfter: 0,
          },
          900.1: {
            slidesPerView: 3,
            slidesOffsetAfter: 0,
          },
        }}
        modules={[FreeMode, Scrollbar, Autoplay, Pagination, Navigation]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <img src="/img/fav01.jpeg" />
          <FavText>
            <p>허니드로우</p>
            <FavAddress>서울 서대문구</FavAddress>
          </FavText>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/fav01.jpeg" />
          <FavText>
            <p>허니드로우</p>
            <FavAddress>서울 서대문구</FavAddress>
          </FavText>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/fav01.jpeg" />
          <FavText>
            <p>허니드로우</p>
            <FavAddress>서울 서대문구</FavAddress>
          </FavText>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/fav01.jpeg" />
          <FavText>
            <p>허니드로우</p>
            <FavAddress>서울 서대문구</FavAddress>
          </FavText>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/fav01.jpeg" />
          <FavText>
            <p>허니드로우</p>
            <FavAddress>서울 서대문구</FavAddress>
          </FavText>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/fav01.jpeg" />
          <FavText>
            <p>허니드로우</p>
            <FavAddress>서울 서대문구</FavAddress>
          </FavText>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
