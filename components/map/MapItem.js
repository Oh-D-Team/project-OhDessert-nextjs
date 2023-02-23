import { set } from "mongoose";
import { useState, useEffect } from "react";

import Detail from "./Detail";



const MapItem = (props) => {
  const [shopItem, setShopItem] = useState({
    id: "",
    title: "",
    addr: "",
    key1: "",
    state: false,
  });

  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    setShopItem({
      ...MapItem,
      id: props.data._id,
      img: props.data.img1,
      title: props.data.title,
      addr: props.data.address,
      key1: props.data.key1,
    });
  }, []);

  console.log("아이템 전달입니다.", showDetail);

  return (
    <>
      {showDetail ? <Detail data={shopItem}></Detail> : <></>}
      {/* <Detail data={shopItem}></Detail> */}
      <>
        <div className="px-5 py-5 flex gap-5 items-center border-b border-[#ededed] hover:bg-[#fafafa]">
          <div className="w-[140px] h-[100px] rounded-lg overflow-hidden">
            <img src={shopItem.img} className="object-cover w-full h-full" />
          </div>
          <div className="text-black">
            <h3 className="text-lg font-bold truncate">{shopItem.title}</h3>
            <p className="text-sm mt-2">
              <strong className="mr-2">영업중</strong>11:30 ~ 22:00
            </p>
            <p className="text-sm text-[#999] mt-1 truncate">{shopItem.key1}</p>
            <button
              type="button"
              onClick={() => {
                console.log(shopItem);
                setShowDetail(true);
                setShopItem({
                  ...shopItem,
                  state: true,
                });
              }}
            >
              버튼
            </button>
          </div>
        </div>
      </>
    </>
  );
};
export default MapItem;
