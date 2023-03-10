import React from "react";
import { useEffect, useState } from "react";

import MapItem from "./MapItem";
import Detail from "./Detail";

import Search from "../../public/search.svg";
import SolidArrow from "../../public/solid_arrow.svg";

import tw from "tailwind-styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const KeywordLabel1 = tw.label`
  w-[calc(25%-6px)] border border-[#ddd] h-[38px] flex items-center justify-center rounded cursor-pointer
`
const KeywordLabel2 = tw.label`
  w-[calc(100%/3-16px/3)] border border-[#ddd] h-[38px] flex items-center justify-center rounded cursor-pointer
`
const KeywordInput = tw.input`
  hidden
`

const MapList = (props) => {
  const [typeState, setTypeState] = useState();
  const [shopData, setShopData] = useState([]);
  const [checkedInput1, setCheckedInput1] = useState("전체");
  const [checkedInput2, setCheckedInput2] = useState("전체");

  const types1 = [
    {
      num: 1,
      title: "전체",
    },
    {
      num: 2,
      title: "심플한",
    },
    {
      num: 3,
      title: "귀여운",
    },
    {
      num: 4,
      title: "레트로",
    },
    {
      num: 5,
      title: "레터링",
    },
    {
      num: 6,
      title: "3D 입체",
    },
    {
      num: 7,
      title: "플라워",
    },
    {
      num: 8,
      title: "빠른 제작",
    },
    {
      num: 9,
      title: "포토",
    },
    {
      num: 10,
      title: "미니",
    },
  ];

  const types2 = [
    {
      num: 1,
      title: "전체",
    },
    {
      num: 2,
      title: "친구 생일",
    },
    {
      num: 3,
      title: "연인과의 기념일",
    },
    {
      num: 4,
      title: "부모님 생신",
    },
    {
      num: 5,
      title: "반려동물용",
    },
    {
      num: 6,
      title: "특별한 기념일",
    },
  ];

  useEffect(() => {
    setShopData(props.data.products);
  });

  useEffect(() => {
    console.log("리스트의 props입니다.", props.data.products);
  }, []);

  const [showDetail, setShowDetail] = useState(false);

  const handleClickRadioButton1 = (e) => {
    setCheckedInput1(e.target.value)
  }

  const handleClickRadioButton2 = (e) => {
    setCheckedInput2(e.target.value)
  }

  return (
    <>
      <section className="bg-white w-full h-[46%] bottom-0 sm:w-[420px] sm:h-[calc(100vh-80px)] fixed left-0 z-[1] drop-shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#ccc] scrollbar-track-[#ededed] scrollbar-thumb-rounded-full">
        <div className="p-5 bg-white sticky top-0 left-0 shadow-sm">
          <form className="relative">
            <input
              type="search"
              placeholder="가게 이름, 지역, 키워드 검색"
              className="border-2 border-[#F53354] w-full h-12 rounded-lg pl-12 placeholder:text-[#bbb] focus:outline-0"
            />
            <div
              className="absolute top-1/2 left-4 translate-y-[-50%]"
            >
              <Search />
            </div>
          </form>
          <Accordion allowZeroExpanded className="flex mt-5 text-[15px] relative">
            <AccordionItem className="border-none">
              <AccordionItemHeading className="h-[38px]">
                <AccordionItemButton className="h-[38px] bg-[#ededed] flex items-center px-3 rounded text-[#666] focus:outline-0 absolute top-0 left-0 keywordBtn">
                  <p className="pr-2">디자인 컨셉</p>
                  <SolidArrow />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="p-0 mt-5 text-[#333] h-[130px]">
                <div className="flex flex-wrap gap-2 absolute w-full">
                  {types1.map(item => (
                    <KeywordLabel1
                      key={item.num}
                      className={`${checkedInput1 === `${item.title}` ? "mapListChecked" : ""}`}
                    >
                      {/* {" "} */}
                      <KeywordInput
                        type="radio"
                        name="keyword1"
                        value={item.title}
                        id="checkKeyword1"
                        defaultChecked={checkedInput1 === `${item.title}`}
                        onChange={handleClickRadioButton1}
                        onClick={() => {
                          setTypeState(item.title);
                        }}
                      />
                      {/* <label htmlFor="checkKeyword"> */}
                      {item.title}
                      {/* </label> */}
                    </KeywordLabel1>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="border-none">
              <AccordionItemHeading className="h-[38px]">
                <AccordionItemButton className="h-[38px] bg-[#ededed] flex items-center px-3 rounded text-[#666] focus:outline-0 absolute top-0 left-[118px] keywordBtn">
                  <p className="pr-2">상황별</p>
                  <SolidArrow />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="p-0 mt-5 text-[#333] h-[84px]">
                <div className="flex flex-wrap gap-2 absolute w-full">
                  {types2.map(item => (
                    <KeywordLabel2
                      key={item.num}
                      className={`${checkedInput2 === `${item.title}` ? "mapListChecked" : ""}`}
                    >
                      {/* {" "} */}
                      <KeywordInput
                        type="radio"
                        name="keyword2"
                        value={item.title}
                        id="checkKeyword2"
                        defaultChecked={checkedInput2 === `${item.title}`}
                        onChange={handleClickRadioButton2}
                        onClick={() => {
                          setTypeState(item.title);
                        }}
                      />
                      {/* <label htmlFor="checkKeyword"> */}
                      {item.title}
                      {/* </label> */}
                    </KeywordLabel2>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
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
