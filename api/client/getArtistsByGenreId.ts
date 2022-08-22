export default async function getArtistsByGenreId(genreId: number) {
  const res = await fetch(`/api/genres/${genreId}/artists`)
  const { data: artists } = await res.json()

  return artists
}