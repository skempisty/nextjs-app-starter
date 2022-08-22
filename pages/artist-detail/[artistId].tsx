import ArtistDetailComponent from "../../components/ArtistDetail";
import { ArtistData } from "../../types";
import { NextPage } from "next";
import getArtistById from "../../api/server/getArtistById";
import getArtistsRelatedById from "../../api/server/getArtistsRelatedById";


interface IProps {
  artist: ArtistData;
  relatedArtists: Array<ArtistData>
}

const ArtistDetailPage: NextPage<IProps> = ({ artist, relatedArtists }) => {
  return <ArtistDetailComponent artist={artist} relatedArtists={relatedArtists} />
}

export async function getServerSideProps(context: { params: any; }) {
  const { params } = context

  const artist = await getArtistById(params.artistId)
  const relatedArtists = await getArtistsRelatedById(params.artistId)

  return {
    props: {
      artist,
      relatedArtists: relatedArtists.filter((a: ArtistData) => a.id !== params.artistId)
    }
  }
}

export default ArtistDetailPage