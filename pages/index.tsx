import type { NextPage } from 'next'
import HomeComponent from '../components/Home'
import { GenreData } from "../types";
import getGenres from "../api/server/getGenres";


interface IProps {
  genres: Array<GenreData>;
}

const HomePage: NextPage<IProps> = ({ genres }) => {
  return <HomeComponent genres={genres} />
}

export async function getServerSideProps() {
  const genres = await getGenres()

  // Pass data to the page via props
  return { props: { genres } }
}

export default HomePage
