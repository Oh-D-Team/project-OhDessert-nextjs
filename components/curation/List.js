import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import tw from "tailwind-styled-components";

import LearnMore from "../../public/learn_more.svg";
import Plus from "../../public/plus.svg";

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
import KakaoMap from "@/components/map/KakaoMap";
import Slide from "../card/Slide";

const CurationText = tw.p`
  w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] text-white absolute left-0 bottom-0 p-8 pt-[100px] text-2xl font-bold leading-snug max-[1280px]:text-xl max-[1280px]:p-6 max-[1280px]:pt-10
`;
const CurationHoverBox = tw.button`
  flex items-center justify-center
`;
// const FavKeyword = tw.button`
//   w-[120px] h-12 bg-white border border-[#ddd] text-lg rounded-full text-center p-2 text-[#666] max-[900px]:text-base max-[900px]:w-[90px] max-[900px]:h-10 max-[900px]:h-10
// `;
// const FavText = tw.div`
//   w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] text-white absolute left-0 bottom-0 p-8 pt-[34px] text-2xl font-bold leading-[1.2] max-[1280px]:p-5 max-[1280px]:text-xl
// `;
// const FavAddress = tw.span`
//   text-base opacity-50 font-thin
// `;

const SecTitle = tw.span`
  text-[40px] font-bold text-[#F53354] max-[640px]:text-4xl
`;
const SecSubTitle = tw.span`
  text-xl text-[#666] mt-2 max-[640px]:text-lg
`;

const CurationList = () => {
  const router = useRouter();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [curaData, setCuraData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      if (res.data) {
        setCuraData(res.data.data);
      }
    });
  }, []);

  let getData = () => {
    return axios.get(process.env.NEXT_PUBLIC_PORT + "/api/post");
  };

  return (
    <>
      <div className="flex items-end max-w-[1280px] w-[90%] mx-auto my-[150px] gap-9 max-[1280px]:block relative max-[1280px]:flex-col max-[1280px]:items-start max-[500px]:w-[95%] max-[500px]:mr-0">
        <div className="w-[calc(100%/3-96px/5)] max-[1280px]:w-full h-auto overflow-hidden max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:gap-10">
          <div className="absolute top-0 left-[calc(100%/3-16px)] max-[1280px]:left-0 max-[1280px]:relative flex flex-col gap-10 max-[1150px]:gap-6 max-[500px]:w-[95%]">
            <div className="flex flex-col items-start gap-1 max-[600px]:w-[95%]">
              <SecTitle>SWEET CURATION</SecTitle>
              <SecSubTitle>
                스윗트립이 선정한 특별한 디저트 가게, 이런 곳도 있어요!
              </SecSubTitle>
            </div>
            <Link href="/curation">
              <button className="flex items-center gap-2 z-[1] focus:outline-0">
                <p className="text-lg text-[#F53354] font-medium">
                  LEARN <span className="font-bold">MORE</span>
                </p>
                <LearnMore />
              </button>
            </Link>
          </div>
          <Swiper
            slidesPerView={1.8}
            spaceBetween={20}
            slidesPerGroup={1}
            thumbs={{ swiper: thumbsSwiper }}
            scrollbar={true}
            freeMode={true}
            navigation={true}
            watchSlidesProgress={true}
            slidesOffsetAfter={20}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              500.1: {
                slidesPerView: 2,
                slidesOffsetAfter: 0,
              },
              700.1: {
                slidesPerView: 3,
                slidesOffsetAfter: 0,
              },
              900.1: {
                slidesPerView: 4,
                slidesOffsetAfter: 0,
              },
              1280.1: {
                slidesPerView: 1,
                slidesOffsetAfter: 0,
                autoplay: false,
              },
            }}
            modules={[
              Scrollbar,
              Autoplay,
              Pagination,
              FreeMode,
              Navigation,
              Thumbs,
            ]}
            className="mySwiper2"
          >
            {curaData &&
              curaData.map((item) => (
                <SwiperSlide key={item.title}>
                  <div
                    onClick={() =>
                      router.push({
                        pathname: "/curation/[id]",
                        query: { id: item.contentId },
                      })
                    }
                  >
                    <img src={item.img} />
                    <CurationText>
                      {item.title}
                      <br />
                      {item.sub}
                    </CurationText>
                    <CurationHoverBox>
                      <Plus />
                    </CurationHoverBox>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="w-[calc(100%-100%/3-96px/5+36px)] relative">
          {/* {curaData && curaData.map((item) => <Slide data={item}></Slide>)} */}
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
            {curaData.length >= 4 &&
              curaData.map((item) => (
                <SwiperSlide key={item.title}>
                  <div>
                    <img src={item.img} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CurationList;
