import React from "react";
import { useEffect, useState } from "react";

import MapItem from "./MapItem";
import Detail from "./Detail";

import Search from "../../public/search.svg";
import SolidArrow from "../../public/solid_arrow.svg";

const MapList = (props) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(props.data.products);
  });

  useEffect(() => {
    console.log("리스트의 props입니다.", props.data.products);
  }, []);

  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <section className="bg-white w-full h-[46%] bottom-0 sm:w-[420px] sm:h-[calc(100vh-80px)] fixed left-0 z-[1] drop-shadow-lg overflow-y-auto">
        <div className="p-5 border-b-8 border-[#f5f5f5]">
          <form className="relative">
            <input
              type="search"
              placeholder="가게 이름, 지역, 키워드 검색"
              className="border-2 border-[#F53354] w-full h-12 rounded-lg pl-12 placeholder:text-[#bbb]"
            />
            <button
              type="submit"
              className="absolute top-1/2 left-4 translate-y-[-50%]"
            >
              <Search />
            </button>
          </form>
          <div className="flex mt-5 gap-2">
            <button className="h-[36px] bg-[#ededed] flex items-center px-3 rounded text-[#666]">
              <p className="pr-2">디자인 컨셉</p>
              <SolidArrow />
            </button>
            <button className="h-[36px] bg-[#ededed] flex items-center px-3 rounded text-[#666]">
              <p className="pr-2">상황</p>
              <SolidArrow />
            </button>
          </div>
        </div>

        {shopData.map((data, index) => (
          <div key={`${data.title}-${data.latitude}`}>
            <MapItem data={data} />
          </div>
        ))}
      </section>
    </>
  );
};

export default MapList;
