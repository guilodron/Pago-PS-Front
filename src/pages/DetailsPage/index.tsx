import React from 'react'
import { Container } from './styles'
import Form from '../../components/Form'
import { useLocation, useParams } from 'react-router-dom'

const DetailsPage = () => {

  const {state} = useLocation();
  console.log(state)

  return (
    <Container>
        <h1>DETAILS</h1>
        <Form
          expense={state}
          mode='detail'
        />
    </Container>
  )
}

export default DetailsPage