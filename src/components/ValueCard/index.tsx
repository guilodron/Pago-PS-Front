import { ValueCardDTO } from './dto';
import { Container } from './styles'
import { FaCoins } from "react-icons/fa";

const ValueCard = (props: ValueCardDTO) => {
  return (
    <Container
      background={props.backgroundColor}
      accent={props.accent}
    >
        <div>
            <FaCoins color={props.accent} size={22} />
            <span>{props.title}</span>
        </div>
        <span>R${props.value}</span>
    </Container>
  )
}

export default ValueCard