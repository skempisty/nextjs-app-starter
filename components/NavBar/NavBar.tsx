import { FC } from "react";
import Flex from "../shared/styled-system/Flex";
import {Button, Icon} from "semantic-ui-react";
import Link from "next/link";


const NavBar: FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      padding="2em"
    >
      <Link href={"/"}>
        <Button>
          <Icon name="chevron left" />
          Back to Search
        </Button>
      </Link>

      <Link href={"/my-list"}>
        View My List
      </Link>
    </Flex>
  )
}

export default NavBar
