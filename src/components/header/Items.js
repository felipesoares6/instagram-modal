import React from 'react'
import styled from 'styled-components'

import svgCompass from '../../images/compass.svg'
import svgHeart from '../../images/heart.svg'
import svgPerson from '../../images/person.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`

const Image = styled.img`
  height: 100%;
  width: 25px;
`

const ImageWithMargin = Image.extend`
  margin-left: 30px;
  width: 30px;
`

const Items = () => (
  <Container>
    <Image src={ svgCompass } />

    <ImageWithMargin src={ svgHeart } />

    <ImageWithMargin src={ svgPerson } />
  </Container>
)

export default Items
