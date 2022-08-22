export default async function getArtistsRelatedById(id: number) {
  const getSimilarArtistsUrl = `${process.env.MUSIC_API_BASE_URL}/artists/${id}/similar?apikey=${process.env.MAX_API_KEY}`

  const res = await fetch(getSimilarArtistsUrl)
  const { data: relatedArtists } = await res.json()

  return relatedArtists
}