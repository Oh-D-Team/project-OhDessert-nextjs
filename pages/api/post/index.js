import dbConnect from "../../../utils/mongo";
import Curation from "../../../models/curation";

export default async function handler(req, res) {
  const { method, query } = req;

  await dbConnect();

  //
  if (method === "GET") {
    try {
      let data = await Curation.find({}).sort({ contentId: 1 });
      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
