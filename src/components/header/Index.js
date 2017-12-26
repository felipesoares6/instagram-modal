import React from 'react'
import styled from 'styled-components'

import InstagramLogo from './InstagramLogo'
import Items from './Items'

const Container = styled.div`
  height: 80px;
  padding: 26px 40px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Index = () => (
  <Container>
    <Content>
      <InstagramLogo />

      <Items />
    </Content>
  </Container>
)

export default Index
