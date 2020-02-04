import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
    border: 0;
    border-radius: 50px;
    padding: 25px 45px;
    background: linear-gradient(to right, #7dd952, #a4d952);

    margin: 10px 0;

    &:hover {
        background: ${darken(0.03, "#7dd952")};
    }

    span {
        color: #fff;
    }
`;
