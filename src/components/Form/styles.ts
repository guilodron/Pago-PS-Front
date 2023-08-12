import styled from "styled-components";

export const Container = styled.div`
    padding: 50px;
    background-color: var(--light-background);
    border-radius: 15px;
    width: 100%;
    max-width: 590px;

    svg {
        &:hover {
            cursor: pointer;
        }
    }
`;