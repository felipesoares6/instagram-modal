import React from 'react'
import styled from 'styled-components'

import Profile from './Profile'
import Footer from './Footer'
import Interactions from './Interactions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  width: 100%;
  height: 20%;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    width: 35%;
    height: 100%;
  }
`

const Info = () => (
  <Container>
    <Profile />

    <Interactions />

    <Footer />
  </Container>
)

export default Info
