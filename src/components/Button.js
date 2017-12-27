import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 15px 25px;
  color: #fff;
  background-color: rgba(0,0,0,.9);
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Button = ({ onClick, children }) => (
  <ButtonStyled onClick={ onClick }>
    { children }
  </ButtonStyled>
)

export default Button
