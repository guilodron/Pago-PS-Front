import React from 'react'
import { Container, ValueContainer } from './styles'
import ValueCard from '../../components/ValueCard'
import EntriesContainer from './EntriesContainer'
import { useMainPage } from './useMainPage'

const MainPage = () => {

  const {expenses, valuesInfo} = useMainPage();

  return (
    <Container>
        <h1>TRACK YOUR EXPENSES.</h1>
        <ValueContainer>
          <ValueCard 
            title={'DEPOSITS'}
            value={valuesInfo.deposits}
            accent='#7CA431'
            backgroundColor='#2A2A2A'
          />
          <ValueCard 
            title={'EXPENSES'}
            value={valuesInfo.expenses}
            accent='#A43131'
            backgroundColor='#2A2A2A'
          />
          <ValueCard 
            title={'BALANCE'}
            value={valuesInfo.total}
            accent='#2A2A2A'
            backgroundColor='#7CA431'
          />
        </ValueContainer>
        <EntriesContainer expenses={expenses}/>
    </Container>
  )
}

export default MainPage