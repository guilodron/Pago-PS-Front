import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    background-color: var(--light-background);
    display: flex;
    align-items: center;
    margin: 8px 0;
    border-radius: 10px;
    padding: 0 25px;

    div {
        span {
            margin: 0 8px;
            font-size: 16px;
        }
    }
`;