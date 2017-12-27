import React from 'react'

import Overlay from './Overlay'
import Content from './Content'

const Index = ({ visible, toggleVisibility, children }) => (
  <div>
    <Overlay
      visible={ visible }
      toggleVisibility={ toggleVisibility }
    />

    <Content
      visible={ visible }
      children={ children }
    />
  </div>
)

export default Index
