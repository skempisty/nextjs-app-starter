import { FC } from "react";
import { ArtistData } from "../../types";
import Box from "./styled-system/Box";
import ArtistItem from "./ArtistItem";


interface IProps {
  artists: Array<ArtistData>;
}

const ArtistList: FC<IProps> = ({ artists }) => {
  return (
    <Box>
      {artists.map(artist =>
        <ArtistItem key={artist.id} artist={artist} />
      )}
    </Box>
  )
}

export default ArtistList
