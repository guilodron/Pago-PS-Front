import { Container, Entries } from './styles'
import Entry from '../../../components/Entry'
import { EntriesContainerDTO } from './dto'
import { Link } from 'react-router-dom'

const EntriesContainer = ({expenses}: EntriesContainerDTO) => {
  return (
    <Container>
        <div>
            <span>ENTRIES</span>
            <Link to="/create">ADD</Link>
        </div>
        <Entries>
            {expenses.map(expense => 
                <Entry 
                    expense={expense}
                    key={expense.id}                        
                />                
            )}
        </Entries>
    </Container>
  )
}

export default EntriesContainer
