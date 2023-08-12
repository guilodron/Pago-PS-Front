import React from 'react'
import { ButtonDTO } from './dto'
import { Container } from './styles'

const Button = ({children, ...props}: ButtonDTO) => {
  return (
    <Container
        {...props}
    >
        {children}
    </Container>
  )
}

export default Button