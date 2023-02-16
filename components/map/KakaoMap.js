import Script from "next/script";
import { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  CustomOverlayMap,
  MapInfoWindow,
} from "react-kakao-maps-sdk";
import Overlay from "./Overlay";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

// -------------------방법2-----------------------------
const KakaoMap = (props) => {
  const [shopData, setShopData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [markerData, setMarkerData] = useState({
    id: "",
    title: "",
    address: "",
  });

  useEffect(() => {
    console.log("props", props.data.products);
    setShopData(props.data.products);
  });

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map // 지도를 표시할 Container
        center={{ lat: 37.5665734, lng: 126.978179 }} //지도의 중심좌표, 현재 서울시청 기준
        style={{ width: "100%", height: "100vh" }}
        level={5}
      >
        {shopData.map((position, index) => (
          <>
            {/* {console.log("포지션", position)} */}
            <MapMarker // 마커를 생성합니다
              key={`${position.title}-${position.latitude}`}
              position={{
                // 마커가 표시될 위치입니다
                lat: position.lat,
                lng: position.lng,
              }}
              // onClick={() => {
              //   console.log("이름", position.title);
              //   setIsOpen(true);
              //   setMarkerData({
              //     id: position._id,
              //     title: position.title,
              //     address: position.address,
              //   });
              // }}
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
            />

            <CustomOverlayMap
              position={{ lat: position.lat, lng: position.lng }}
              yAnchor={1}
            >
              <div className="customoverlay">
                <a
                  href="https://map.kakao.com/link/map/11394059"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Overlay data={position}></Overlay>
                </a>
              </div>
            </CustomOverlayMap>

            {/* {isOpen ? <Overlay data={position}></Overlay> : <></>} */}
          </>
        ))}
        {/* {isOpen ? <Overlay data={markerData}></Overlay> : <></>} */}
      </Map>
    </>
  );
};

export default KakaoMap;

// --------------------방법 1-----------------------------------------------------
// const Map = ({
//     latitude ,
//     longitude,
//   }) => {

//     //카카오 지도 API 가져오기
//     useEffect(()=> {
//         const mapScript = document.createElement('script');

//         mapScript.async = true;
//         mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

//      document.head.appendChild(mapScript);

//      const onLoadKakaoMap = () => {
//         window.kakao.maps.load(() => {
//           const container = document.getElementById("map");
//           const options = {
//             center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//           };
//           const map = new window.kakao.maps.Map(container, options);
//           const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
//           const marker = new window.kakao.maps.Marker({
//             position: markerPosition,
//           });
//           marker.setMap(map);
//         });
//       };
//       mapScript.addEventListener("load", onLoadKakaoMap);

//  return () => mapScript.removeEventListener("load", onLoadKakaoMap);
//     }, [latitude, longitude]);

//     return (
//         <div id="map" style={{
//             width: '500px',
//             height: '500px'
//         }}>

//         </div>
//     );
// };

// export default Map;
