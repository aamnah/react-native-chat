import React from 'react'
import { Text } from 'react-native'
import { styled } from 'styled-components/native'

export default function App() {
  return (
    <Container>
      <Text>This is my chat app</Text>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background: salmon;
  align-items: center;
  justify-content: center;
  font-weight: 24px;
`
