import React from 'react'
import styled from 'styled-components'

import Modal from '../modal/Index'
import Photo from './Photo'
import Info from './Info'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Index = ({ isModalVisible, toggleModalVisibility }) => (
  <Modal
    visible={ isModalVisible }
    toggleVisibility={ toggleModalVisibility }
  >
    <Container>
      <Photo />

      <Info />
    </Container>
  </Modal>
)

export default Index
