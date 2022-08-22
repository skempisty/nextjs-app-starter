export default async function getArtistsByGenreId(id: number) {
  const genreArtistsUrl = `${process.env.MUSIC_API_BASE_URL}/genres/${id}/artists?apikey=${process.env.MAX_API_KEY}`

  const res = await fetch(genreArtistsUrl)
  const { data: artists } = await res.json()

  return artists
}