import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  text-transform: ${ props => props.uppercase ? 'uppercase' : 'none' };
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: ${ props => props.large ? '10px 20px' : '5px 10px' };
  font-weight: bold;
  font-size: 14px;
`

const Button = ({ onClick, children, uppercase, large }) => (
  <ButtonStyled
    large={ large }
    uppercase={ uppercase }
    onClick={ onClick }
  >
    { children }
  </ButtonStyled>
)

export default Button
