import { FC } from "react";
import {ArtistData} from "../../types";


interface IProps {
  artist: ArtistData;
  relatedArtists: Array<ArtistData>
}

const ArtistDetail: FC<IProps> = ({ artist, relatedArtists }) => {
  return <p>Artist Detail: {artist.name}</p>
}

export default ArtistDetail
