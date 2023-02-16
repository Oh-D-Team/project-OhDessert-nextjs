import React from "react";

export default function MapList(){
    return(
    <>
        <section className="bg-white w-full h-[46%] bottom-0 sm:w-[400px] sm:h-screen fixed sm:top-0 left-0 z-[1] drop-shadow-lg overflow-y-auto">
            <div className="px-5 py-5 flex gap-5 items-center border-b border-[#ededed] hover:bg-[#fafafa]">
                <div className="w-[140px] h-[100px] rounded-lg overflow-hidden"><img src="/img/map_list_image.jpg" className="object-cover w-full h-full"/></div>
                <div className="text-black w-[180px]">
                    <h3 className="text-lg font-bold truncate">딩가케이크 연남점</h3>
                    <p className="text-sm mt-2"><strong className="mr-2">영업중</strong>11:30 ~ 22:00</p>
                    <p className="text-sm text-[#999] mt-1 truncate">서울 마포구 동교로 29길 68</p>
                </div>
            </div>
        </section>
    </>
    )
}