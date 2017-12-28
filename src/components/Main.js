import React from 'react'
import { withState, withHandlers, compose, pure } from 'recompose'
import styled from 'styled-components'

import Button from './Button'
import ModalPhoto from './modal-photo/Index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const MainPure = ({ isModalVisible, toggleModalVisibility }) => (
  <Container>
    <ModalPhoto
      isModalVisible={ isModalVisible }
      toggleModalVisibility={ toggleModalVisibility }
    />

    <Button
      onClick={ toggleModalVisibility }
      uppercase
      large
    >
      Open the modal
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
