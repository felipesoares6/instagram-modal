import React from 'react'
import styled from 'styled-components'

import svgHeart from '../../images/heart.svg'
import svgMenu from '../../images/menu.svg'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-height: 250px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-top: 1.2px solid #efefef;
  margin-top: auto;
`

const Hearth = styled.img`
  height: 20px;
  width: 25px;
`

const Input = styled.input`
  border: 0;
  padding: 10px;
  font-size: 14px;
`

const Menu = styled.img`
  height: 20px;
  width: 26px;
  margin-left: auto;
`

const Footer = () => (
  <Container>
    <Hearth src={ svgHeart } />

    <Input type='text' placeholder='Add a comment...' />

    <Menu src={ svgMenu } />
  </Container>
)

export default Footer
