import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const CurationDetail = ({ data }) => {
  const [curationData, setCurationData] = useState([]);
  const [shopData, setShopData] = useState([]);

  let url = shopData.contect;

  console.log("url", url);

  useEffect(() => {
    setCurationData(data.data[0]);
    setShopData([data.data[0].shop1, data.data[0].shop2]);
  }, []);

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <>
      <section className="w-full h-[500px] overflow-hidden relative max-[900px]:h-[400px]">
        <div className="w-full h-full after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.2)] after:w-full after:h-full after:z-[1]">
          <img
            src={curationData.img}
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="w-[500px] h-full absolute top-0 left-1/2 -translate-x-1/2 max-[900px]:w-[400px]">
          <img src={curationData.img} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white max-w-[1280px] w-[90%] mx-auto z-[1] flex flex-col gap-6">
          <h2 className="text-5xl max-[640px]:text-4xl max-[640px]:leading-normal font-bold leading-snug">
            {curationData.title}
            <br />
            {curationData.sub}
          </h2>
          <p className="text-xl opacity-60">2023.02.27</p>
        </div>
      </section>
      <section className="max-w-[1060px] w-[85%] mx-auto leading-loose mt-[100px] mb-[150px] text-lg sm:text-xl sm:leading-loose text-[#333]">
        <div className="font-medium">
          <p>{curationData.desc}</p>
        </div>

        {shopData &&
          shopData.map((item) => (
            <div key={item.title} className="mt-[120px]">
              <h3 className="text-[32px] text-black font-bold mb-[60px]">
                {item.title}
              </h3>
              <div className="relative w-full h-0 pt-[43%]">
                <Swiper
                  slidesPerView={1}
                  navigation={true}
                  centeredSlides={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper5"
                >
                  <SwiperSlide>
                    <img src={item.img1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/img/roseberry_more_02.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="flex flex-col gap-[60px]">
                <p className="mt-[60px]">{item.cura}</p>
                <div className="flex flex-col gap-4">
                  <dl className="flex text-lg max-[640px]:text-base gap-2">
                    <dt className="w-[80px] font-bold text-black">주소</dt>
                    <dd className="w-[calc(100%-80px)]">{item.address}</dd>
                  </dl>
                  <dl className="flex text-lg max-[640px]:text-base gap-2">
                    <dt className="w-[80px] font-bold text-black">운영 시간</dt>
                    <dd className="w-[calc(100%-80px)]">
                      {item.open}
                    </dd>
                  </dl>
                  <dl className="flex text-lg max-[640px]:text-base gap-2">
                    <dt className="w-[80px] font-bold text-black">휴무일</dt>
                    <dd className="w-[calc(100%-80px)]">
                      휴무 {item.close}
                    </dd>
                  </dl>
                  <dl className="flex text-lg max-[640px]:text-base gap-2">
                    <dt className="w-[80px] font-bold text-black">사이트</dt>
                    <button onClick={() => handleOpenNewTab(item.contact)}>
                      <dd className="w-[calc(100%-80px)] underline">
                        {item.contact}
                      </dd>
                    </button>
                  </dl>
                </div>
              </div>
            </div>
          ))}

        <Link href="/curation">
          <button className="bg-[#F53354] text-white text-lg w-[240px] h-[60px] flex items-center justify-center mt-[120px] mx-auto">
            목록으로 돌아가기
          </button>
        </Link>
      </section>
    </>
  );
};

export default CurationDetail;
