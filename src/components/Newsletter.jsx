import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Tilte = styled.h1`
  font-size: 70px;
  margin-bottom; 20px;
`

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 40px;
  background-color: white;
`

const Input = styled.input`
  flex:8;
  height: 100%;
  border: none;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  height: 100%;
  color: white;
  cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
      <Tilte>Newsletter</Tilte>
      <Desc>Get timely update from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter