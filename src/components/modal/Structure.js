import React from 'react'
import styled from 'styled-components'

const StructureStyled = styled.div`
  display: ${ props => props.visible ? 'block' : 'none' };
  width: 850px;
  max-width: 95%;
  height: 550px;
  max-height: 90%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Structure = ({ visible, children }) => (
  <StructureStyled visible={ visible }>
    { children }
  </StructureStyled>
)

export default Structure
