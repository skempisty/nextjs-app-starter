import {useRouter} from "next/router";


const MyList = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Artist Detail: {pid}</p>
}

export default MyList