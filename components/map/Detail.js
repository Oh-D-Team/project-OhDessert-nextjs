import React from 'react';

import Share from "../../public/share.svg";
import Time from "../../public/time.svg";
import Date from "../../public/date.svg";
import Pin from "../../public/pin.svg";

function Detail() {
  return (
    <section className="bg-white w-full h-[46%] bottom-0 sm:w-[400px] sm:h-[calc(100vh-70px)] fixed left-0 z-[1] drop-shadow-lg overflow-y-auto">
        <div className="h-[220px]">
            <img src="/img/map_list_image.jpg" className="object-cover w-full h-full" />
        </div>
        <div>
            <div className="flex flex-col items-center py-6 border-b border-[#ededed] mx-5">
                <h3 className="text-2xl text-black font-bold">딩가케이크</h3>
                <p className="text-[#999] mt-2">빈티지스러운 느낌의 디저트 가게</p>
                <button className="h-10 text-[#F53354] font-medium border border-[#F53354] px-4 rounded-full flex items-center gap-2 mt-4">
                    <Share /><p>공유하기</p>
                </button>
            </div>
            <div className="p-5 border-b-[10px] border-[#f5f5f5]">
                <ul className="gap-3 flex flex-col">
                    <li className="flex gap-3 text-[#333] items-center"><Time /><p>11:30 ~ 22:00</p></li>
                    <li className="flex gap-3 text-[#333] items-center"><Date /><p>매주 화요일 휴무</p></li>
                    <li className="flex gap-3 text-[#333] items-center"><Pin /><p>서울 마포구 동교로 29길 68</p></li>
                </ul>
                <ul className="flex gap-2 mt-4">
                    <li className="bg-[#f1f1f1] h-[32px] text-[15px] px-3 flex items-center rounded text-[#999]"># 빈티지</li>
                    <li className="bg-[#f1f1f1] h-[32px] text-[15px] px-3 flex items-center rounded text-[#999]"># 레터링 케이크</li>
                    <li className="bg-[#f1f1f1] h-[32px] text-[15px] px-3 flex items-center rounded text-[#999]"># 컵케이크</li>
                </ul>
            </div>
        </div>
        <div className="p-5">
            <h3 className="text-black font-bold text-base">이런 분들께 추천드려요</h3>
            <ul className="mt-4 flex flex-wrap gap-4">
                <li className="border border-[#ddd] rounded-lg flex flex-col items-center text-[#333] p-5 gap-3 w-[calc(50%-8px)]">
                    {/* 아이콘 */}
                    <p className="text-center">특별한 생일 케이크를 원하시는 분</p>
                </li>
                <li className="border border-[#ddd] rounded-lg flex flex-col items-center text-[#333] p-5 gap-3 w-[calc(50%-8px)]">
                    {/* 아이콘 */}
                    <p className="text-center">특별한 생일 케이크를 원하시는 분</p>
                </li>
                <li className="border border-[#ddd] rounded-lg flex flex-col items-center text-[#333] p-5 gap-3 w-[calc(50%-8px)]">
                    {/* 아이콘 */}
                    <p className="text-center">특별한 생일 케이크를 원하시는 분</p>
                </li>
                <li className="border border-[#ddd] rounded-lg flex flex-col items-center text-[#333] p-5 gap-3 w-[calc(50%-8px)]">
                    {/* 아이콘 */}
                    <p className="text-center">특별한 생일 케이크를 원하시는 분</p>
                </li>
            </ul>
        </div>
        <div className="bg-white w-full sticky bottom-0 left-0 p-5">
            <button className="bg-[#F53354] w-full text-white h-[60px] flex items-center justify-center rounded-lg">사이트로 이동하기</button>
        </div>
    </section>
  )
}

export default Detail
