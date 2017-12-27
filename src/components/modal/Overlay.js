import React from 'react'
import styled from 'styled-components'

import svgClose from '../../images/close.svg'

const OverlayStyled = styled.div`
  display: ${ props => props.visible ? 'block' : 'none' };
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0,0,0,.75);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    margin: 10px;
    background-image: url(${svgClose});
    cursor: pointer;
  }
`

const Overlay = ({ visible, toggleVisibility }) => (
  <OverlayStyled
    visible={ visible }
    onClick={ toggleVisibility }
  />
)

export default Overlay
