import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    svg {
        cursor: pointer;
        color: gray;
        transition: color 0.2s;
        margin: 0 15px;

        &:hover {
            color: ${darken(0.1, "gray")};
        }
    }
`;
