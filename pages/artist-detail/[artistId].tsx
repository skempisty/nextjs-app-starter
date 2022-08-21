import ArtistDetailComponent from "../../components/ArtistDetail";
import { ArtistData } from "../../types";
import { NextPage } from "next";


interface IProps {
  artist: ArtistData;
  relatedArtists: Array<ArtistData>
}

const ArtistDetailPage: NextPage<IProps> = ({ artist, relatedArtists }) => {
  return <ArtistDetailComponent artist={artist} relatedArtists={relatedArtists} />
}

export async function getServerSideProps(context: { params: any; }) {
  const { params } = context

  const getArtistUrl = `https://music.musicaudience.info/api/v1/music/artists/${params.artistId}?apikey=${process.env.MAX_API_KEY}`
  const artistRes = await fetch(getArtistUrl)
  const { data: [ artist ] } = await artistRes.json()

  const getSimilarArtistsUrl = `https://music.musicaudience.info/api/v1/music/artists/${params.artistId}/similar?apikey=${process.env.MAX_API_KEY}`
  const res = await fetch(getSimilarArtistsUrl)
  const { data: relatedArtists } = await res.json()

  return {
    props: {
      artist,
      relatedArtists: relatedArtists.filter((a: ArtistData) => a.id !== params.artistId)
    }
  }
}

export default ArtistDetailPage