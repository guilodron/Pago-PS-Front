import styled from "styled-components";

export const Container = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: blue; */

    h1 {
        font-weight: 500;
        color: var(--light-text);
        font-size: 40px;
        margin: 40px 0;
    }

`;

export const ValueContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: space-between;
`;