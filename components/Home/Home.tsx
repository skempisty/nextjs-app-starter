import { GenreData } from "../../types";
import { Dropdown } from 'semantic-ui-react'
import { FC, useEffect, useState } from "react";
import ArtistList from "../shared/ArtistList";
import Box from "../shared/styled-system/Box";
import getArtistsByGenreId from "../../api/client/getArtistsByGenreId";


interface IProps {
  genres: Array<GenreData>;
}

const Home: FC<IProps> = ({ genres }) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null)
  const [genreArtists, setGenreArtists] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (selectedGenreId) {
        const artists = await getArtistsByGenreId(selectedGenreId)

        setGenreArtists(artists)
      }
    }
    fetchData();
  }, [selectedGenreId])

  const genreOptions = genres.map(g => ({
    key: g.id,
    text: g.name,
    value: g.name,
    onClick: () => setSelectedGenreId(g.id)
  }))

  return (
    <>
      <Box marginBottom="1em">
        <Dropdown
          placeholder='Enter a genre to find artists'
          fluid
          search
          selection
          options={genreOptions}
        />
      </Box>

      <ArtistList artists={genreArtists} />
    </>
  )
}

export default Home
