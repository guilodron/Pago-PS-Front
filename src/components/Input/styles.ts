import styled, {css} from 'styled-components';

export const Container = styled.div<{isfocus: boolean; filled: boolean}>`
    height: 3.125rem;
    background-color: var(--background);
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: 2px solid var(--background);
    border-radius: 5px;
    transition: 0.2s;
    margin-bottom: 0.5rem;

    svg {
        color: gray;
        transition: 0.2s;
    }

    ${props => (props.isfocus || props.filled) &&
        css`
            border-color: var(--accent);
        `
    }

    input {
        margin-left: 0.6rem;
        height: 100%;
        width: 100%;
        font-size: 1.1rem;
        outline: none;
        border: none;
        color: var(--light-text);
        background-color: var(--background);
    }
`;