import React from "react";
import axios from "axios";

import KaKaoMap from "../components/map/KakaoMap";
import MapList from "../components/map/MapList";
import Detail from "../components/map/Detail";

const Map = ({ data }) => {
  console.log("데이터", data);



  return (
    <div className="flex ">
      <main className="absolute w-screen h-screen left-0 top-0">
        <KaKaoMap data={data} />
        {/* <Detail /> */}
        <MapList data={data} />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_PORT + "/api/map/");

  const data = await res.data;
  return {
    props: { data },
  };
};

export default Map;
