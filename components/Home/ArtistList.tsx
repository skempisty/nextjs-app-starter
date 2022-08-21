import { FC } from "react";
import { ArtistData } from "../../types";
import { Image, Button } from 'semantic-ui-react'
import Box from "../shared/Box";
import Flex from "../shared/Flex";


interface IProps {
  artists: Array<ArtistData>;
}

const ArtistList: FC<IProps> = ({ artists }) => {
  return (
    <Box>
      {artists.map((artist) => {
        const primaryGenre = artist.genres.find(g => g.is_primary)

        return (
          <Flex
            key={artist.id}
            maxWidth="30em"
            justifyContent="space-between"
            alignItems="center"
            padding="1em"
            border="2px solid black"
          >
            <Image src={artist.image} alt={artist.name} size="tiny"/>

            <Box>
              <h3>
                {artist.name}
              </h3>
              <div>
                {primaryGenre?.name || ""}
              </div>
            </Box>

            <Button
              primary
              content="Add"
            />
          </Flex>
        )
      })}
    </Box>
  )
}

export default ArtistList
