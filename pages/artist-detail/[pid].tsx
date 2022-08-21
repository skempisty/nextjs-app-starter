import { useRouter } from "next/router";
import ArtistDetailComponent from "../../components/ArtistDetail";
import { ArtistData } from "../../types";
import { NextPage } from "next";
import remove from 'lodash/remove'

interface IProps {
  artist: ArtistData;
  relatedArtists: Array<ArtistData>
}

const ArtistDetailPage: NextPage<IProps> = ({ artist, relatedArtists }) => {
  const router = useRouter()
  const { pid } = router.query

  return <ArtistDetailComponent artist={artist} relatedArtists={relatedArtists} />
}

export async function getServerSideProps(context: { params: any; }) {
  const { params } = context

  const getArtistAndSimilarUrl = `https://music.musicaudience.info/api/v1/music/artists/${params.pid}/similar?apikey=${process.env.MAX_API_KEY}`

  const res = await fetch(getArtistAndSimilarUrl)
  const { data } = await res.json()

  const [ artist ] = remove(data, (a: any) => String(a.id) === params.pid)

  return {
    props: {
      artist,
      relatedArtists: data
    }
  }
}

export default ArtistDetailPage