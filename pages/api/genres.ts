import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { q } } = req

  const getGenresUrl = `https://music.musicaudience.info/api/v1/music/genres?apikey=${process.env.MAX_API_KEY}&${q ? `q=${q}` : ""}`

  const foo = await fetch(getGenresUrl)
  const data = await foo.json()

  res.status(200).json({ data })
}