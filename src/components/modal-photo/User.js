import React from 'react'
import styled from 'styled-components'

import avatar from '../../images/avatar.png'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Photo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 150%;
`

const Name = styled.h1`
  letter-spacing: 1px;
  font-size: .875rem;
  margin-left: 10px;
`

const User = () => (
  <Container>
    <Photo src={ avatar } />
    <Name> felipesoares </Name>
  </Container>
)

export default User
