import React from 'react'
import styled from 'styled-components'

const ModalStyled = styled.div`
  display: ${ props => props.visible ? 'block' : 'none' };
  width: 900px;
  max-width: 90%;
  height: 450px;
  max-height: 90%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Content = ({ visible, children }) => (
  <ModalStyled visible={ visible }>
    { children }
  </ModalStyled>
)

export default Content
