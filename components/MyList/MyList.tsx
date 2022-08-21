import { FC } from "react";
import ArtistList from "../shared/ArtistList";
import { useAppSelector } from "../../store/hooks";
import { selectMyArtistList } from "../../store/slices/appSlice";
import Flex from "../shared/styled-system/Flex";
import Title from "../shared/styled-system/Title";
import Text from "../shared/styled-system/Text";


const MyList: FC = () => {
  const artistList = useAppSelector(selectMyArtistList)

  return (
    <Flex flexDirection="column" alignItems="center">
      <Title marginBottom="3em">My List</Title>

      {artistList.length > 0 ?
        <ArtistList artists={artistList}/>
        :
        <Text>No Artists in List</Text>
      }
    </Flex>
  )
}

export default MyList
