import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
 margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom:10px;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 100%;
`

const Footer = () => {
  return (
    <Container>

      <Left>
        <Logo>TOKOKU</Logo>
        <Desc>
          There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humor, or randomised words which don't look even slighty believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color='3b5999'>
            <Facebook/>
          </SocialIcon>
          <SocialIcon color='e4405f'>
            <Instagram/>
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter/>
          </SocialIcon>
          <SocialIcon color='e60023'>
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Navigations</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wshlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:'10px'}} />
          jl. Gajahyana, Malang 65111
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:'10px'}} />
          +62 812 3456 7890
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:'10px'}} />
          fajrissoba@gmail.com
        </ContactItem>

        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>

    </Container>
  )
}

export default Footer