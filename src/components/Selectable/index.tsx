import { Container } from './styles'
import { InputSelectableDTO } from './dto'

const Selectable = ({children, ...props}: InputSelectableDTO) => {
    console.log(props.disabled)
  return (
    <Container 
        {...props}
        selected={props.selected}
        disabled={props.disabled || false}
    >
        {children}
    </Container>
  )
}

export default Selectable