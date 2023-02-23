import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";

import tw from "tailwind-styled-components";

const inter = Inter({ subsets: ["latin"] });

const FavKeyword = tw.button`
  w-[calc(100%/8-140px/8)] bg-[#ddd] text-lg rounded-full text-center p-2 font-medium text-[#999]
`;
const CurationBox = tw.div`
  bg-[#ddd] w-[calc(25%-18px)] h-[320px] rounded-2xl
  `;

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    // router.push("/map");
  };

  return (
    <>
      <Head>
        <title>Dessert</title>
        <meta name="description" content="we loved all dessert!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <section className="w-full h-[500px] sm:h-[600px] bg-[#d9d9d9] relative mt-[120px] sm:mt-[80px]">
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white max-w-[1280px] w-full mx-auto px-5">
          <p className="text-3xl font-bold">
            평범함은 싫은
            <br />
            당신을 위해
          </p>
          <p className="opacity-50 mt-5">특별 케이크 5종</p>
        </div>
      </section>
      {/* section01 end */}
      <section className="max-w-[1280px] mx-auto px-5 mt-[60px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-black">이런 곳도 있어요</h2>
          <button>전체보기</button>
        </div>
        <div className="flex gap-6 mt-5">
          <CurationBox></CurationBox>
          <CurationBox></CurationBox>
          <CurationBox></CurationBox>
          <CurationBox></CurationBox>
        </div>
      </section>
      {/* section02 end */}
      <section className="max-w-[1280px] mx-auto px-5 mt-10">
        <div>
          <h2 className="text-2xl font-bold text-black">내 디저트 취향은?</h2>
        </div>
        <div className="mt-5 flex gap-5 flex-wrap">
          <FavKeyword className="bg-black text-white">전체</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
          <FavKeyword>키워드</FavKeyword>
        </div>
        <button
          className="bg-black text-white text-center text-xl font-bold max-w-[360px] w-full rounded-full p-4 m-auto block mt-[60px]"
          onClick={handleClick}
        >
          내 취향 가게 보러가기
        </button>
      </section>
      <section className="max-w-[1280px] mx-auto px-5 mt-[100px]">
        <h2 className="mx-auto text-center text-black font-bold text-xl">
          디저트를 검색해 보세요
        </h2>
        <input className="bg-[#f1f1f1] max-w-[700px] w-full h-[60px] mx-auto block mt-5 rounded-full" />
      </section>
    </>
  );
}
