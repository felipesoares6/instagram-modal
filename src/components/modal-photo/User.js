import React from 'react'
import styled from 'styled-components'

import avatar from '../../images/avatar.png'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: .875rem;
  font-weight:bold;
`

const Photo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 150%;
  margin-right: 10px;
`

const User = () => (
  <Container>
    <Photo src={ avatar } />
    <span> felipesoares </span>
  </Container>
)

export default User
