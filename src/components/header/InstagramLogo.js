import React from 'react'
import styled from 'styled-components'

import svgInstagram from '../../images/instagram.svg'
import svgInstagramName from '../../images/instagram-name.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InstagramName = styled.img`
  height: 100%;
  width: 80px;
`

const Instagram = styled.img`
  height: 100%;
  width: 25px;
`

const DivisionBar = styled.div`
  height: 25px;
  border-left: 1px solid #414141;
  margin-left: 15px;
  margin-right: 15px;
`

const InstagramLogo = () => (
  <Container>
    <Instagram src={ svgInstagram } />

    <DivisionBar />

    <InstagramName src={ svgInstagramName } />
  </Container>
)

export default InstagramLogo
