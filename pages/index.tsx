import type { NextPage } from 'next'
import HomeComponent from '../components/Home'
import { GenreData } from "../types";

interface IProps {
  genres: Array<GenreData>;
}

const HomePage: NextPage<IProps> = ({ genres }) => {
  return <HomeComponent genres={genres} />
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const getGenresUrl = `https://music.musicaudience.info/api/v1/music/genres?apikey=${process.env.MAX_API_KEY}`

  const res = await fetch(getGenresUrl)
  const { data: genres } = await res.json()

  // Pass data to the page via props
  return { props: { genres } }
}

export default HomePage
