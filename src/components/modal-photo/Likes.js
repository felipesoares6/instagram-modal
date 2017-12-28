import React from 'react'
import styled from 'styled-components'

const Users = styled.p`
  display: inline;
`

const DaysCount = styled.span`
  display: inline;
  float:right;
  color: #ccc;
`

const Likes = () => (
  <div>
    <Users>
      <strong> marcelosilva </strong>
      and
      <strong> jorgetop </strong>
      like this
    </Users>

    <DaysCount>
      <strong>33w </strong>
    </DaysCount>
  </div>
)

export default Likes
