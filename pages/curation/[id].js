import React from "react";
import axios from "axios";
import CurationDetail from "@/components/CurationDetail";

const CurationDatail = ({ data }) => {
  console.log(data);
  return (
    <>
      <CurationDetail data={data}></CurationDetail>
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get(process.env.NEXT_PUBLIC_PORT + "/api/post");
  const list = await res.data.data;

  const paths = list.map((list) => ({
    params: { id: list.contentId.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios.get(process.env.NEXT_PUBLIC_PORT + `/api/post/${id}`);

  const data = await res.data;
  return {
    props: { data },
  };
}

export default CurationDatail;
