export default async function getGenres() {
  const getGenresUrl = `${process.env.MUSIC_API_BASE_URL}/genres?apikey=${process.env.MAX_API_KEY}`

  const res = await fetch(getGenresUrl)
  const { data: genres } = await res.json()

  return genres
}