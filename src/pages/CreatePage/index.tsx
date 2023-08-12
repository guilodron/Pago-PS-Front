import React from 'react'
import { Container } from './styles'
import Form from '../../components/Form'

const CreatePage = () => {
  return (
    <Container>
        <h1>CREATE</h1>
        <Form 
          mode='create'
        />
    </Container>
  )
}

export default CreatePage