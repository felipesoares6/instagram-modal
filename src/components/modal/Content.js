import React from 'react'
import styled from 'styled-components'

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

const Content = ({ visible, children }) => (
  <ModalStyled visible={ visible }>
    { children }
  </ModalStyled>
)

export default Content
