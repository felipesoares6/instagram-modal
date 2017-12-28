import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import User from './User'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 250px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1.2px solid #efefef;
`

const Profile = () => (
  <Container>
    <User />

    <Button> Following </Button>
  </Container>
)

export default Profile
