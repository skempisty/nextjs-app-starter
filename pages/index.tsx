import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Dropdown, Input } from 'semantic-ui-react'
import SelectSearch from 'react-dropdown-select';


import {useEffect, useState} from "react";

type GenreData = {
  id: number;
  parent_id: number;
  name: string;
}

interface IProps {
  genres: Array<GenreData>;
}

const Home: NextPage<IProps> = ({ genres }) => {
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

  // presented with a list of artists matching
  // that genre. Each artist displayed should show the following information:

  const genreOptions = genres.map(g => ({
    key: g.id,
    text: g.name,
    value: g.name,
    onClick: () => setSelectedGenreId(g.id)
  }))

  return (
    <>
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={genreOptions}
      />

      <ul>
      {genreArtists.map((artist: any) => {
        return (
          <li key={artist.id}>{artist.name}</li>
        )
      })}
      </ul>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const getGenresUrl = `https://music.musicaudience.info/api/v1/music/genres?apikey=${process.env.MAX_API_KEY}`

  const res = await fetch(getGenresUrl)
  const { data: genres } = await res.json()

  console.log('PREPROCESSING data', genres)

  // Pass data to the page via props
  return { props: { genres } }
}

export default Home
