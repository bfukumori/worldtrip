import { NextApiRequest, NextApiResponse } from "next";
import { loadContinents } from "../../../lib/fetchLocations";
export default async function locationHandler({ query: { id } }: NextApiRequest, res: NextApiResponse) {
  const continents = await loadContinents();

  const filtered = continents.filter(continent => continent.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);

  } else {
    res.status(404).json({ message: `Continente com id: ${id} não encontrado.` })
  }
}