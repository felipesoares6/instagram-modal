import React from 'react'

import Overlay from './Overlay'
import Structure from './Structure'

const Index = ({ visible, toggleVisibility, children }) => (
  <div>
    <Overlay
      visible={ visible }
      toggleVisibility={ toggleVisibility }
    />

    <Structure
      visible={ visible }
      children={ children }
    />
  </div>
)

export default Index
