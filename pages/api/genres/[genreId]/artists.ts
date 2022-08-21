import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { genreId } } = req

  const genreArtistsUrl = `https://music.musicaudience.info/api/v1/music/genres/${genreId}/artists?apikey=${process.env.MAX_API_KEY}`

  const foo = await fetch(genreArtistsUrl)
  const { data } = await foo.json()

  res.status(200).json({ data })
}