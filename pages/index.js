import React, { useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { Inter } from "@next/font/google";




import CurationList from "@/components/curation/List";
import CardList from "@/components/card/List";

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

const inter = Inter({ subsets: ["latin"] });


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
      <section className="w-full h-[600px] max-[640px]:h-[500px] bg-[#999] relative">
        <div className="w-full h-full">
          <img
            src="/img/main_banner.jpg"
            className="w-full h-full object-cover block max-[1080px]:hidden"
          />
          <img
            src="/img/main_banner_tablet.jpg"
            className="w-full h-full object-cover hidden max-[1080px]:block max-[640px]:hidden"
          />
          <img
            src="/img/main_banner_mob.jpg"
            className="w-full h-full object-cover hidden max-[640px]:block"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white max-w-[1280px] w-[90%] mx-auto max-[640px]:top-[60px] max-[640px]:translate-y-0">
          <p className="text-5xl font-bold leading-normal max-[640px]:text-4xl max-[640px]:leading-normal max-[400px]:text-3xl max-[400px]:leading-normal">
            스윗트립,
            <br />
            달콤한 여행을 떠나요!
          </p>
          <Link href="/map">
            <button className="mt-8 border border-[#fff] h-14 flex items-center px-6 text-lg max-[640px]:text-base max-[640px]:h-12 max-[640px]:px-5 max-[640px]:mt-5">
              원하는 가게 찾으러 가기
            </button>
          </Link>
        </div>
      </section>
      {/* section01 end */}
      {/* section02 start */}
      <CurationList></CurationList>
      {/* section02 end */}
      {/* section03 start */}
      <CardList></CardList>
      {/* section03 end */}
    </>
  );
}
