import React from "react";
import styled from 'styled-components'
import {
  color, space, layout, background, border, position,
  ColorProps, SpaceProps, LayoutProps, BackgroundProps, BorderProps, PositionProps
} from 'styled-system'


interface Props extends ColorProps, SpaceProps, LayoutProps, BackgroundProps, BorderProps, PositionProps {
  children: React.ReactNode;
}

/**
 * The basic building block for all styled-system derived components.
 * See https://styled-system.com/api
 */
const Box = styled.div<Props>`
  ${position}
  ${layout}
  ${space}
  ${color}
  ${background}
  ${border}
`

export default Box