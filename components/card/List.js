import React, { useEffect, useState } from "react";
import axios from "axios";

import tw from "tailwind-styled-components";

import Hi from "./Hi";
import Slide from "./Slide";
import Footer from "../Footer";

const SecTitle = tw.span`
  text-[40px] font-bold text-[#F53354] max-[640px]:text-4xl
`;
const SecSubTitle = tw.span`
  text-xl text-[#666] mt-2 max-[640px]:text-lg
`;

const FavKeyword = tw.button`
  w-[120px] h-12 bg-white border border-[#ddd] text-lg rounded-full text-center p-2 text-[#666] max-[900px]:text-base max-[900px]:w-[90px] max-[900px]:h-10 max-[900px]:h-10
`;

const List = () => {
  const [typeState, setTypeState] = useState();
  const [cardData, setcardData] = useState(null);

  const types = [
    {
      num: 1,
      title: "귀여운",
    },
    {
      num: 2,
      title: "레터링",
    },
    {
      num: 3,
      title: "플라워",
    },
    {
      num: 4,
      title: "미니",
    },
    {
      num: 5,
      title: "심플",
    },
    {
      num: 6,
      title: "3D 입체",
    },
  ];

  // 초기 렌더링시 typeState = "귀여운"
  useEffect(() => {
    setTypeState("귀여운");
  }, []);

  //typeState가 변경되면 함수를 호출하여 새로운 데이터를 불러옴
  useEffect(() => {
    getData().then((res) => {
      if (res.data.postList.length >= 1) {
        setcardData(res.data.postList);
      }
    });
  }, [typeState]);

  console.log("카드", cardData);

  //data를 가져오는 함수
  let getData = () => {
    return axios.get(
      process.env.NEXT_PUBLIC_PORT + `/api/card/key?title=${typeState}`,
      {}
    );
  };

  return (
    <section className="py-[150px] bg-[#FAF6FF]">
      <div className="max-w-[1280px] w-[90%] mx-auto max-[600px]:w-[95%] max-[600px]:mr-0">
        <div className="flex flex-col items-center gap-1 max-[900px]:items-start max-[600px]:w-[95%]">
          <SecTitle>MY FAVORITE</SecTitle>
          <SecSubTitle>
            키워드를 선택하여 나에게 맞는 디저트 가게를 찾아보세요!
          </SecSubTitle>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center max-[900px]:justify-start max-[900px]:gap-2 max-[600px]:w-[95%]">
          {types.map((item) => (
            <div key={item.num}>
              {" "}
              <FavKeyword
                onClick={() => {
                  setTypeState(item.title);
                }}
              >
                {item.title}
              </FavKeyword>
            </div>
          ))}
        </div>
        {cardData !== null ? <Hi data={cardData}></Hi> : <></>}
      </div>
    </section>
  );
};

export default List;

{
  /* {cardData !== null ? <Slide data={cardData}></Slide> : <></>} */
}
