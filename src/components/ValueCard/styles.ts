import styled from "styled-components";

export const Container = styled.div<{background: string, accent: string}>`
    width: 100%;
    background-color: ${props => props.background};
    max-width: 243px;
    border-radius: 15px;
    aspect-ratio: 1.9;
    padding: 29px;

    div {
        span {
            margin-left: 10px;
            color: ${props => props.accent};
            font-size: 16px;
        }
    }

    span {
        margin-top: 18px;
        color: ${props => props.accent};
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
    }
`;