import React, { useState } from "react";

import {
  Map,
  MapMarker,
  CustomOverlayMap,
  MapInfoWindow,
  Polyline,
  Circle,
} from "react-kakao-maps-sdk";

import Overlay from "./map/Overlay";

import tw from "tailwind-styled-components";
import Close from "../public/close.svg";
import Pin from "../public/pin.svg";
import Time from "../public/time.svg";
import Date from "../public/date.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const ModalBg = tw.div`
  bg-[rgba(0,0,0,0.3)] w-full h-screen fixed top-0 left-0 z-[3]
`;
const SubTitle = tw.h3`
  text-lg text-black font-bold
`;
const InfoList = tw.li`
flex items-center gap-3 text-[#333] text-base
`;
const Keyword = tw.li`
  h-9 text-[#666] bg-[#ededed] px-4 flex items-center rounded-[4px] text-[15px]
`;

const FavModal = (props) => {
  let { setModalState, data } = props;
  const [keyArray, setKeyArray] = useState([]);

  useState(() => {
    setKeyArray(data.key1.split(","));
  });

  return (
    <>
      <ModalBg  
        onClick={() => {
          setModalState(false);
        }}>  
      </ModalBg>
      <div className="max-w-[760px] w-[90%] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 overflow-hidden -translate-y-1/2 z-[4] rounded-2xl max-[640px]:w-full max-[640px]:h-screen max-[640px]:rounded-none overflow-y-auto flex flex-col">
        <div className="w-full px-10 py-6 border-b border-[#ddd] bg-white flex items-center justify-between max-[640px]:sticky max-[640px]:top-0 max-[640px]:h-[70px] max-[640px]:px-5 max-[640px]:py-4">
          <h2 className="text-xl text-black font-bold">{data.title}</h2>
          <button
            onClick={() => {
              setModalState(false);
            }}
          >
            <Close />
          </button>
        </div>
        <div className="flex flex-col gap-10 p-10 pt-6 overflow-y-auto max-[640px]:p-5">
          <div className="flex flex-col gap-4">
            <SubTitle>상세 정보</SubTitle>
            <div className="flex gap-5 max-[640px]:flex-col">
              <div className="bg-[#ccc] w-[50%] h-[240px] rounded-lg flex items-center justify-center border border-[#ededed] max-[640px]:w-full max-[640px]:h-[180px]">
                {/* // 지도를 표시할 Container 지도의 중심좌표, 현재 서울시청 기준 */}
                <Map // 지도를 표시할 Container
                  center={{
                    // 지도의 중심좌표
                    lat: data.lat,
                    lng: data.lng,
                  }}
                  style={{
                    // 지도의 크기
                    width: "100%",
                    height: "100%",
                  }}
                  level={4} // 지도의 확대 레벨
                >
                  <CustomOverlayMap
                    position={{ lat: data.lat, lng: data.lng }} // 마커 표시 위치
                  >
                    <div className="customoverlay">
                      <Overlay data={data}></Overlay>
                    </div>
                  </CustomOverlayMap>
                </Map>
              </div>
              <div className="flex flex-col gap-7 w-[calc(50%-10px)] max-[640px]:w-full">
                <div className="flex flex-col gap-5">
                  <ul className="flex flex-col gap-4">
                    <InfoList>
                      <div>
                        <Pin />
                      </div>
                      <p>{data.address}</p>
                    </InfoList>
                    <InfoList>
                      <div>
                        <Time />
                      </div>
                      <p>{data.open}</p>
                    </InfoList>
                    <InfoList>
                      <div>
                        <Date />
                      </div>
                      <p>휴무 {data.close}</p>
                    </InfoList>
                  </ul>
                  <ul className="flex gap-2 flex-wrap">
                    {keyArray &&
                      keyArray.map((item) => (
                        <Keyword key={item}># {item}</Keyword>
                      ))}
                    {/* <Keyword># 레트로</Keyword>
                    <Keyword># 레터링</Keyword> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <SubTitle>업체 사진</SubTitle>
            <Swiper
              slidesPerView={2}
              spaceBetween={12}
              navigation={true}
              breakpoints={{
                500.1: {
                  slidesPerView: 3,
                },
                800.1: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              className="mySwiper4"
            >
              <SwiperSlide>
                <img
                  src="/img/honeydraw_01.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/honeydraw_02.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/honeydraw_03.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/img/honeydraw_04.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full bg-white p-10 pt-0 max-[640px]:p-5 max-[640px]:sticky max-[640px]:bottom-0 max-[640px]:left-0 max-[640px]:z-[2] max-[640px]:border-t max-[640px]:border-[#ededed]">
          <button className="bg-[#F53354] w-full h-[60px] flex items-center justify-center text-white font-medium text-lg rounded-lg px-6">
            사이트로 이동하기
          </button>
        </div>
      </div>
    </>
  );
};

export default FavModal;
