import styled, { css } from "styled-components";

export const Container = styled.button<{selected: boolean, disabled: boolean}>`
    width: 120px;
    height: 54px;
    background-color: transparent;
    border: none;
    border: 3px solid ${props => props.selected ? 'var(--accent)' : 'var(--background)'};
    border-radius: 5px;
    font-size: 14px;
    margin-right: 6px;
    color: var(--light-text);
    &:hover {
        ${props => !props.disabled && css`
            cursor: pointer;
            border-color: var(--accent);        
        `}
    }
    transition: .3s;
`;