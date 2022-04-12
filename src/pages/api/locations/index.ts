import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "../../../../data";
export default function locationHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(continents);
}