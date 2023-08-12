import { Container } from './styles'
import { FaEdit, FaTrash } from "react-icons/fa";
import Input from '../Input';
import { FormDTO } from './dto';
import { useForm } from './useForm';
import Selectable from '../Selectable';
import Button from '../Button';

const Form = (props: FormDTO) => {

    const {
        editable,
        setEditable,
        expense,
        setExpense,
        editExpense,
        createExpense,
        deleteExpense
    } = useForm(props);

    return (
      <Container>
          <Input 
              placeholder="Title"
              onChange={(e) => setExpense({...expense, title: e.target.value})}
              value={expense?.title || ''}
              disabled={!editable}
          />
          <Input 
              placeholder="Value"
              onChange={(e) => setExpense({...expense, value: parseFloat(e.target.value)})}
              value={expense?.value || ''}
              disabled={!editable}
              type='number'
          />
          <Input 
              placeholder="Description"
              onChange={(e) => setExpense({...expense, description: e.target.value})}
              value={expense?.description || ''}
              disabled={!editable}
          />
          <div style={{marginBottom: 20}} className='typeContainer'>
            <Selectable
                onClick={() => setExpense({...expense, type: 1})}
                disabled={!editable}
                selected={expense.type===1}
            >DEPOSIT</Selectable>
            <Selectable
                disabled={!editable}
                onClick={() => setExpense({...expense, type: 2})}
                selected={expense.type===2}
            >EXPENSE</Selectable>
          </div>
          {props.mode==='detail' &&  <div className='iconsContainer'>
            <FaEdit 
                onClick={() => setEditable(!editable)}
                size={24} 
                color='var(--accent)'
                style={{marginRight: 15}}
            />
            <FaTrash 
                onClick={() => deleteExpense()}
                size={24} 
                color='var(--negative)'
            />
          </div>}
          {editable && 
            <Button 
                onClick={() => props.mode === 'detail' ? editExpense() : createExpense()}>
                    SAVE
            </Button>}
      </Container>
  )
}

export default Form