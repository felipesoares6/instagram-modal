import React from 'react'
import styled from 'styled-components'

import Likes from './Likes'

const Container = styled.div`
  margin-top: 10px;
  font-size: 13px;
`

const CommentsStyled = styled.div`
  margin-top: 20px;
  width: 80%;
`

const Interactions = () => (
  <Container>
    <Likes />

    <CommentsStyled>
      <strong> jorgetop </strong>
      Não entendi essa mas achei bonita
    </CommentsStyled>
  </Container>
)

export default Interactions
