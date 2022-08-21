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
        <Box key={artist.id} marginBottom="1em">
          <ArtistItem artist={artist} />
        </Box>
      )}
    </Box>
  )
}

export default ArtistList
