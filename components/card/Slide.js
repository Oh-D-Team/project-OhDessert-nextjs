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
  const [slideImg, setSlideImg] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    setSlideImg({ img: data.img });
  }, []);

  console.log("슬라이드 어레이 출력", data.img);
  console.log("슬라이드 어레이 출력", slideImg);

  return (
    <div className="flex items-start gap-6 mt-[60px]">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={1}
        watchSlidesProgress={true}
        scrollbar={true}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[
          Scrollbar,
          Autoplay,
          Pagination,
          FreeMode,
          Navigation,
          Thumbs,
        ]}
        className="mySwiper"
      >
        {slideImg && (
          <SwiperSlide>
            <img src={slideImg.img} />
          </SwiperSlide>
        )}
        {/* <SwiperSlide>
          <img src={slideArray.img} />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slide;
