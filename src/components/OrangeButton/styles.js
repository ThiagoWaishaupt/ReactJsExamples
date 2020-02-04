import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
    background: #f25a38;
    /* padding: 8px 14px; */

    height: 27px;
    width: 55px;

    border: 0;
    border-radius: 10px;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.07, "#f25a38")};
    }

    span {
        color: #fff;
        font-size: 11px;
        cursor: pointer;
    }
`;
