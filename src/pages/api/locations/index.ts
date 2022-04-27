import { NextApiRequest, NextApiResponse } from "next";
import { loadContinents } from "../../../lib/fetchLocations";
export default async function locationHandler(req: NextApiRequest, res: NextApiResponse) {

  const continents = await loadContinents()
  res.status(200).json(continents);
}