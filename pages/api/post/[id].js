import dbConnect from "../../../utils/mongo";
import Curation from "../../../models/curation";

export default async function handler(req, res) {
  const { method, query } = req;

  const contentId = query.id;

  await dbConnect();

  if (method === "GET") {
    try {
      let data = await Curation.find({ contentId: contentId })
        .populate("shop1")
        .populate("shop2")
        .exec();
      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //
}
