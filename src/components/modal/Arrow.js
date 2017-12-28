import React from 'react'
import styled from 'styled-components'

import svgArrow from '../../images/arrow.svg'

const ArrowStyled = styled.img`
  display: ${ props => props.visible ? 'inline' : 'none' };
  height: 100%;
  width: 25px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`

const ArrowLeftStyled = ArrowStyled.extend`
  transform: rotate(180deg);
`

export const Arrow = ({ visible }) => (
  <div>
    <ArrowStyled
      src={ svgArrow }
      visible={ visible }
    />
  </div>
)

export const ArrowLeft = ({ visible }) => (
  <div>
    <ArrowLeftStyled
      src={ svgArrow }
      visible={ visible }
    />
  </div>
)
