import React from 'react'
import { FaCoins, FaInfoCircle } from "react-icons/fa";
import { Container } from './styles'
import { EntryDTO } from './dto';
import { Link, useNavigate } from 'react-router-dom';

const Entry = ({expense}: EntryDTO) => {
  const navigate = useNavigate();
  return (
    <Container>
        <div>
            <FaCoins 
                size={22}
                color={expense.type === 1 ? '#7CA431' : '#A43131'} />
            <span>{expense.value}</span>
            <span>{expense.title}</span>
        </div>
        <FaInfoCircle onClick={() => navigate('/detail', {state: expense})} color='#A9A9A9'/>
    </Container>
  )
}

export default Entry