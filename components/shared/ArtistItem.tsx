import { FC } from "react";
import { ArtistData } from "../../types";
import { Button } from 'semantic-ui-react'
import Box from "./styled-system/Box";
import Flex from "./styled-system/Flex";
import ArtistPrimaryInfo from "./ArtistPrimaryInfo";


interface IProps {
  artist: ArtistData;
  isCompact?: boolean;
}

const ArtistItem: FC<IProps> = ({ artist, isCompact = true }) => {
  const primaryGenre = artist.genres.find(g => g.is_primary)
  const additionalGenres = primaryGenre ? artist.genres.filter(g => g.id !== primaryGenre.id) : artist.genres

  const additionalGenresText = additionalGenres.map(g => g.name).join(", ")

  return (
    <Flex
      key={artist.id}
      maxWidth="30em"
      justifyContent="space-between"
      alignItems={isCompact ? "center" : "flex-start"}
      padding="1em"
      border="2px solid black"
      flexDirection={isCompact ? "row" : "column"}
    >
      {isCompact ?
        <ArtistPrimaryInfo
          artist={artist}
          primaryGenre={primaryGenre?.name || "None"}
          isCompact={isCompact}
        />
        :
        <Flex marginBottom="1em">
          <ArtistPrimaryInfo
            artist={artist}
            primaryGenre={primaryGenre?.name || "None"}
            isCompact={isCompact}
          />
        </Flex>
      }

      <Flex justifyContent="space-between" width={isCompact ? undefined : "100%"}>
        {!isCompact &&
          <Flex flexDirection="column">
            <b>Additional Genres:</b>
            <Box>{additionalGenresText || "None"}</Box>
          </Flex>
        }

        <Button
          primary
          content="Add"
        />
      </Flex>
    </Flex>
  )
}

export default ArtistItem
