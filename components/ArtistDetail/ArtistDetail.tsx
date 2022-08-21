import { FC } from "react";
import {ArtistData} from "../../types";
import ArtistList from "../shared/ArtistList";
import Title from "../shared/styled-system/Title";


interface IProps {
  artist: ArtistData;
  relatedArtists: Array<ArtistData>
}

const ArtistDetail: FC<IProps> = ({ artist, relatedArtists }) => {
  return (
    <>
      <p>Artist Detail: {artist.name}</p>

      <Title>Related Artists</Title>
      <ArtistList artists={relatedArtists}/>
    </>
  )
}

export default ArtistDetail
