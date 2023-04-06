import { Search, ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  padding: 5px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`

const Right = styled.div` 
  flex: 1;
  display : flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input  placeholder='search'/>
            <Search style={{color:'gray', fontSize:16}}/>
          </SearchContainer>
        </Left>

        <Center><Logo>TOKOKU</Logo></Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar