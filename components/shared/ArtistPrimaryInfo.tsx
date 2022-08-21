import {FC} from "react";
import Box from "./styled-system/Box";
import {Image} from "semantic-ui-react";
import Flex from "./styled-system/Flex";
import Title from "./styled-system/Title";
import Link from "next/link";
import Text from "./styled-system/Text";
import {ArtistData} from "../../types";


interface IProps {
  artist: ArtistData;
  primaryGenre: string;
  isCompact?: boolean;
}

const ArtistPrimaryInfo: FC<IProps> = ({ artist, primaryGenre, isCompact = true }) => {
  return (
    <>
      <Box marginRight={isCompact ? undefined : "2em"}>
        <Image src={artist.image} alt={artist.name} size="tiny"/>
      </Box>

      <Flex flexDirection="column" alignItems={isCompact ? "center" : "flex-start"}>
        <Title
          as="h3"
          textAlign="center"
        >
          <Link href={`/artist-detail/${artist.id}`}>
            {artist.name}
          </Link>
        </Title>

        <Text>
          {!isCompact &&
            <Text
              marginRight="0.5em"
              fontWeight="bold"
            >
              Primary Genre:
            </Text>
          }

          {primaryGenre}
        </Text>

        {!isCompact &&
          <Text marginTop="0.5em">
            <Text
              marginRight="0.5em"
              fontWeight="bold"
            >
              Popularity Score:
            </Text>

            {artist.popularity}
          </Text>
        }
      </Flex>
    </>
  )
}

export default ArtistPrimaryInfo