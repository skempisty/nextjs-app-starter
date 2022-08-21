import React from "react";
import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'
import Box from './Box'


interface Props extends FlexboxProps {
  children: React.ReactNode;
}

const Flex = styled(Box)<Props>`
  display: flex;

  ${flexbox}
`

export default Flex
