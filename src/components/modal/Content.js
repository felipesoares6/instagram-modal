import React from 'react'
import styled from 'styled-components'

import svgClose from '../../images/close.svg'
import Button from '../Button'

const ModalStyled = styled.div`
  display: ${ props => props.visible ? 'block' : 'none' };
  width: 600px;
  max-width: 90%;
  height: 400px;
  max-height: 90%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0 0 1px 1px rgba(0,0,0,.2);
`

const Close = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`

const Content = ({ children, visible, toggleVisibility }) => (
  <ModalStyled visible={ visible }>
    <Close
      onClick={ toggleVisibility }
      src={ svgClose }
    />

    { children }
  </ModalStyled>
)

export default Content