import { FC } from "react";
import { ArtistData } from "../../types";
import { Image, Button } from 'semantic-ui-react'
import Link from "next/link";
import Box from "../shared/Box";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import Title from "../shared/Title";


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

            <Flex flexDirection="column" alignItems="center">
              <Title
                as="h3"
                textAlign="center"
              >
                <Link href={`/artist-detail/${artist.id}`}>
                  {artist.name}
                </Link>
              </Title>

              <Text>
                {primaryGenre?.name || ""}
              </Text>
            </Flex>

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
