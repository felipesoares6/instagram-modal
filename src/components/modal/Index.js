import React from 'react'
import styled from 'styled-components'

import Overlay from './Overlay'
import Content from './Content'

const Index = (props) => (
  <div>
    <Overlay
      visible={ props.visible }
      onClick={ props.toggleVisibility }
    />

    <Content { ...props } />
  </div>
)

export default Index
