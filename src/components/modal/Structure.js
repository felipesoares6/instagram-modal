import React from 'react'
import styled from 'styled-components'

import { Arrow, ArrowLeft } from './Arrow'

const StructureStyled = styled.div`
  display: ${ props => props.visible ? 'flex' : 'none' };
  width: 102%;
  min-height: 100%;
  position: fixed;
  z-index: 100;
  transform: translate(-50%, -48%);
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    transform: translateY(-50%, -50%);
    width: 950px;
    min-width: 95%;
    height: 500px;
    min-height: 80%;
  }
`

const Structure = ({ visible, children }) => (
  <StructureStyled visible={ visible }>
    <ArrowLeft visible={ visible } />

    { children }

    <Arrow visible={ visible } />
  </StructureStyled>
)

export default Structure
