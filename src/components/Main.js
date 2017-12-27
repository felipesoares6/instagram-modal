import React from 'react'
import { withState, withHandlers, compose, pure } from 'recompose'
import styled from 'styled-components'

import Button from './Button'
import Modal from './modal/Index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const MainPure = ({ isModalVisible, toggleModalVisibility }) => (
  <Container>
    <Modal
      visible={ isModalVisible }
      toggleVisibility={ toggleModalVisibility }>
    </Modal>

    <Button onClick={ toggleModalVisibility }>
      Open the modal!
    </Button>
  </Container>
)

const isModalVisible = withState('isModalVisible', 'setModalVisibility', false)

const toggleModalVisibility = withHandlers({
  toggleModalVisibility: ({ isModalVisible, setModalVisibility }) => event => {
    setModalVisibility(!isModalVisible)
  }
})

const Main = compose(
  isModalVisible,
  toggleModalVisibility,
  pure
)(MainPure)

export default Main
