import React from "react";
import Script from "next/script";
import { useState, useEffect } from "react";

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
import FavModal from "../FavModal";

const FavText = tw.div`
  w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] text-white absolute left-0 bottom-0 p-8 pt-[34px] text-2xl font-bold leading-[1.2] max-[1280px]:p-5 max-[1280px]:text-xl
`;
const FavAddress = tw.span`
  text-base opacity-50 font-thin
`;

const CardItem = ({ data }) => {
  const [slideArray, setSlideArray] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    setSlideArray(data);
  });

  return (
    <>
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
          <div>
            {slideArray &&
              slideArray.map((item) => (
                <div key={`${item.title}-${item.lat}`}>
                  <SwiperSlide key={item.title}>
                    <div
                      onClick={() => {
                        setModalData(item);
                        setModalState(true);
                      }}
                    >
                      <img src={item.img1} />
                      <FavText>
                        <p>{item.title}</p>
                        <FavAddress>{item.address}</FavAddress>
                      </FavText>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
          </div>
        </Swiper>
      </div>
      {modalState ? (
        <FavModal data={modalData} setModalState={setModalState}></FavModal>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardItem;
