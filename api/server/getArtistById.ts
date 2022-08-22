export default async function getArtistById(id: number) {
  const getArtistUrl = `${process.env.MUSIC_API_BASE_URL}/artists/${id}?apikey=${process.env.MAX_API_KEY}`

  const artistRes = await fetch(getArtistUrl)
  const { data: [ artist ] } = await artistRes.json()

  return artist
}