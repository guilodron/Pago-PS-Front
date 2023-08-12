import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 54px;
    margin-top: 10px;
    border: none;
    border-radius: 10px;
    background-color: var(--accent);
    color: var(--background);
    font-size: 18px;

    &:hover{
        cursor: pointer;
        opacity: .8;
        transition: .2s;
    }
`;