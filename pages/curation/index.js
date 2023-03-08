import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import LinesEllipsis from "react-lines-ellipsis";

import tw from "tailwind-styled-components";
import Masonry from "react-masonry-css";

const ItemTitle = tw.h3`
    text-[22px] font-bold mt-6 sm:text-2xl
`;

const Curation = ({ data }) => {
  const router = useRouter();

  const [dataArray, SetDataArray] = useState([]);

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
  };

  useEffect(() => {
    SetDataArray(data.data);
    console.log(data);
  }, []);

  return (
    <>
      <secction className="max-w-[1280px] w-[90%] mx-auto mt-[80px] mb-10 sm:mt-[150px] sm:mb-[90px] flex flex-col gap-[60px] max-[500px]:gap-8">
        <h2 className="text-[#F53354] text-4xl min-[500px]:text-5xl sm:text-6xl font-bold border-b border-[#ededed] pb-6">
          CURATION
        </h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dataArray &&
            dataArray.map((item) => (
              <div
                key={item.title}
                onClick={() =>
                  router.push({
                    pathname: "/curation/[id]",
                    query: { id: item.contentId },
                  })
                }
              >
                <div>
                  <img src={item.img} />
                </div>
                <ItemTitle>
                  {item.title} {item.sub}
                </ItemTitle>
                <LinesEllipsis
                  text={item.desc}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </div>
            ))}
        </Masonry>
      </secction>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_PORT + "/api/post");

  const data = await res.data;
  return {
    props: { data },
  };
};

export default Curation;
