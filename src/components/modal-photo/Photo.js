import React from 'react'
import styled from 'styled-components'

import photo from '../../images/photo.jpeg'

const PhotoStyled = styled.img`
  width: 100%;
  height: 80%;

  @media (min-width: 768px) {
    width: 65%;
    height: 100%;
  }
`

const Photo = () => (
  <PhotoStyled src={ photo } />
)

export default Photo
