import { FC } from "react";
import styled from "styled-components";
import Box from "../shared/styled-system/Box";
import Flex from "../shared/styled-system/Flex";
import Link from "next/link";
import {Button, Icon} from "semantic-ui-react";
import { useRouter } from "next/router";


interface IVisibilityBoxProps {
  visible: boolean;
}

const VisibilityBox = styled(Box)<IVisibilityBoxProps>`
  visibility: ${props => props.visible ? "visible" : "hidden"};
`

const NavBar: FC = () => {
  const { pathname } = useRouter()
  const isOnHome = pathname === "/"
  const isOnMyList = pathname === "/my-list"

  return (
    <Flex
      justifyContent="space-between"
      padding="2em"
    >
      <VisibilityBox visible={!isOnHome}>
        <Link href={"/"}>
          <Button>
            <Icon name="chevron left" />
            Back to Search
          </Button>
        </Link>
      </VisibilityBox>

      <VisibilityBox visible={!isOnMyList}>
        <Link href={"/my-list"}>
          View My List
        </Link>
      </VisibilityBox>
    </Flex>
  )
}

export default NavBar
