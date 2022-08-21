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
  isCompact?: boolean;
}

const ArtistPrimaryInfo: FC<IProps> = ({ artist, isCompact = true }) => {
  const primaryGenre = artist.genres.find(g => g.is_primary)

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
            <Text marginRight="0.5em">Primary Genre:</Text>
          }

          {primaryGenre?.name || ""}
        </Text>

        {!isCompact &&
          <Text>
            <Text marginRight="0.5em">Popularity Score:</Text>

            90
          </Text>
        }
      </Flex>
    </>
  )
}

export default ArtistPrimaryInfo