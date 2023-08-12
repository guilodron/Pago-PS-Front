import { InputHTMLAttributes, useState } from 'react';
import {Container} from './styles';

interface InputDTO extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({...props}: InputDTO) => {

    const [focus, setIsFocus] = useState(false);
    const [filled, setIsFilled] = useState(false);

    const handleOnFocus = () => {
        setIsFocus(true);
    }

    const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFocus(false);
        console.log(!!event.target.value);
        setIsFilled(event.target.value?true:false);
    }

    return (
        <Container filled={filled} isfocus={focus}>
            <input 
                {...props}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
            />
        </Container>
    )
}

export default Input;
