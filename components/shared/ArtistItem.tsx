import { FC } from "react";
import { ArtistData } from "../../types";
import { Button } from 'semantic-ui-react'
import Flex from "./styled-system/Flex";
import ArtistPrimaryInfo from "./ArtistPrimaryInfo";


interface IProps {
  artist: ArtistData;
  isCompact?: boolean;
}

const ArtistItem: FC<IProps> = ({ artist, isCompact = true }) => {
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
        <ArtistPrimaryInfo artist={artist} isCompact={isCompact}/>
        :
        <Flex marginBottom="1em">
          <ArtistPrimaryInfo artist={artist} isCompact={isCompact}/>
        </Flex>
      }

      <Flex justifyContent="space-between" width={isCompact ? undefined : "100%"}>
        {!isCompact &&
          <Flex flexDirection="column">
            <div>Additional Genres</div>
            <div>Heavy Metal, Hard Rock, Classic Rock</div>
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
