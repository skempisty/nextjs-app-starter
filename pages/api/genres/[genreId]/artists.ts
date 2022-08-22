import type { NextApiRequest, NextApiResponse } from 'next'
import getArtistsByGenreId from "../../../../api/server/getArtistsByGenreId";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { genreId } } = req

  const artists = await getArtistsByGenreId(Number(genreId))

  res.status(200).json({ data: artists })
}