import React from 'react'
import styled from 'styled-components'

const OverlayStyled = styled.div`
  display: ${ props => props.visible ? 'block' : 'none' };
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0,0,0,.6);
`

const Overlay = ({ visible, toggleVisibility }) => (
  <OverlayStyled
    visible={ visible }
    onClick={ toggleVisibility }
  />
)

export default Overlay
