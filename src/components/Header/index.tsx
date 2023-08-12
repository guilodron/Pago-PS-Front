import React from 'react'
import { Container } from './styles'
import { FiDollarSign, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
        <FiDollarSign color='#7CA431' size={40}/>
        <div></div>
        <FiMenu color='#7CA431' size={40}/>
    </Container>
  )
}

export default Header