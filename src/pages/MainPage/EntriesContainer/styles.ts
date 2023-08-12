import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    width: 100%;
    div {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight: bold;

        span {
            color: var(--light-text);
        }
    }
`;

export const Entries = styled.div`
    display: flex;
    flex-direction: column;
`;