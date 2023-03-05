import dbConnect from "../../../utils/mongo";
import Product from "../../../models/product";

export default async function handler(req, res) {
  const { method, query } = req;

  await dbConnect();

  console.log("req.query", query);

  let startStr = query.start.split(",");
  let endStr = query.end.split(",");

  if (method === "GET") {
    try {
      const products = await Product.find()
        .where("lat")
        .gt(startStr[0])
        .where("lat")
        .lte(endStr[0])
        .where("lng")
        .gt(startStr[1])
        .where("lng")
        .lte(endStr[1]);

      console.log("프로덕트", products);
      res.status(200).json({ products });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
