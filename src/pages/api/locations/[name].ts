import { NextApiRequest, NextApiResponse } from "next";
import { continents } from "../../../../data";
export default function locationHandler({ query: { name } }: NextApiRequest, res: NextApiResponse) {

  const filtered = continents.filter(continent => continent.name === name);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);

  } else {
    res.status(404).json({ message: `Continente com id: ${name} não encontrado.` })
  }
}