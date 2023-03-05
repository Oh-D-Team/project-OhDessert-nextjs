import React, { useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { Inter } from "@next/font/google";

import tw from "tailwind-styled-components";

import LearnMore from "../public/learn_more.svg";
import Plus from "../public/plus.svg";

import List from "@/components/card/List";

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

const inter = Inter({ subsets: ["latin"] });

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

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    // router.push("/map");
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Head>
        <title>Dessert</title>
        <meta name="description" content="we loved all dessert!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* section01 start */}
      <section className="w-full h-[500px] sm:h-[620px] bg-[#999] relative mt-[120px] sm:mt-[80px]">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white max-w-[1280px] w-[90%] mx-auto">
          <p className="text-5xl font-bold leading-snug max-[640px]:text-4xl max-[640px]:leading-normal max-[400px]:text-3xl max-[400px]:leading-normal">
            스윗트립,
            <br />
            달콤한 여행을 떠나요!
          </p>
          <button className="mt-5 border border-[#fff] h-14 flex items-center px-6 text-lg max-[640px]:text-base max-[640px]:h-12 max-[640px]:px-5">
            원하는 가게 찾으러 가기
          </button>
        </div>
      </section>
      {/* section01 end */}
      {/* section02 start */}
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
                scrollbar: false,
                pagination: false,
                navigation: false,
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
            <SwiperSlide>
              <img src="/img/curation01.jpg" />
              <CurationText>
                캐릭터 케이크
                <br />
                귀여운게 최고야
              </CurationText>
              <CurationHoverBox>
                <Plus />
              </CurationHoverBox>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation02.jpg" />
              <CurationText>
                반려동물을 위한
                <br />
                케이크도 있어요
              </CurationText>
              <CurationHoverBox>
                <Plus />
              </CurationHoverBox>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation03.jpg" />
              <CurationText>
                레드벨벳 Pick!
                <br />
                레트로 무드 케이크
              </CurationText>
              <CurationHoverBox>
                <Plus />
              </CurationHoverBox>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation04.jpg" />
              <CurationText>
                레터링 케이크로
                <br />
                마음을 전하다
              </CurationText>
              <CurationHoverBox>
                <Plus />
              </CurationHoverBox>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation05.jpg" />
              <CurationText>
                포토 케이크에
                <br />
                특별한 순간을 담다
              </CurationText>
              <CurationHoverBox>
                <Plus />
              </CurationHoverBox>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation06.jpg" />
              <CurationText>
                플라워 케이크로
                <br />
                기념일을 특별하게!
              </CurationText>
              <CurationHoverBox>
                <Plus />
              </CurationHoverBox>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[calc(100%-100%/3-96px/5+36px)] relative">
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
            <SwiperSlide>
              <img src="/img/curation01.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation02.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation03.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation04.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation05.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/curation06.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* section02 end */}
      {/* section03 start */}
      <List></List>
      {/* section03 end */}
    </>
  );
}
