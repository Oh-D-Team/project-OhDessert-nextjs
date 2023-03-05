import dbConnect from "../../../utils/mongo";
import Product from "../../../models/product";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  //process.env.NEXT_PUBLIC_PORT + `/api/card/key?title=${typeState}`
  //아이템들을 랜덤으로 키워드에 맞게 가져옴
  if (method === "GET") {
    const key = req.query.title;

    try {
      const postList = await Product.aggregate([
        { $match: { key1: { $regex: key } } }, //key1필드가 key인 5개의 데이터를 랜덤으로 가져옴.
        { $sample: { size: 5 } },
      ]);

      res.status(200).json({ postList });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
