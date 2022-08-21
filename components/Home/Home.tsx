import { GenreData } from "../../types";
import { Dropdown } from 'semantic-ui-react'
import { FC, useEffect, useState } from "react";
import ArtistList from "./ArtistList";


interface IProps {
  genres: Array<GenreData>;
}

const Home: FC<IProps> = ({ genres }) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null)
  const [genreArtists, setGenreArtists] = useState([])

  useEffect(() => {
    async function fetchData() {
      if (selectedGenreId) {
        console.log('selectedGenreId', selectedGenreId)

        // get list of artists matching that genre
        const res = await fetch(`/api/genres/${selectedGenreId}/artists`)
        const { data: artists } = await res.json()
        console.log('artists', artists)

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
      <Dropdown
        placeholder='Enter a genre to find artists'
        fluid
        search
        selection
        options={genreOptions}
      />

      <ArtistList artists={genreArtists} />
    </>
  )
}

export default Home
