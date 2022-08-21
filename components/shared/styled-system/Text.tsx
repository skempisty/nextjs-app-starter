import React from "react";
import styled from 'styled-components'
import { typography, TypographyProps} from 'styled-system'
import Box from './Box'


interface Props extends TypographyProps {
  as?: string;
  children: React.ReactNode;
}

const Text = styled(Box)<Props>`
  ${typography}
`

Text.defaultProps = {
  as: 'span'
}

export default Text
