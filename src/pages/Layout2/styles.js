import styled from "styled-components";
import { darken } from "polished";

import quartoHotel from "../../assets/images/quarto.jpg";

export const Container = styled.div`
    background: #191920 url(${quartoHotel}) no-repeat center top;

    max-width: 1200px;
    min-width: 400px;
    min-height: 800px;
    border: 5px solid silver;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 50px 50px;
    margin: 20px auto 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        border: 0;
        border-radius: 4px;
        height: 45px;
        width: 45px;
        background: #fff;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.15, "#fff")};
        }

        svg {
            color: ${darken(0.2, "gray")};
        }
    }

    div {
        p {
            display: flex;
            justify-content: flex-end;

            font-size: 12px;
            color: #fff;
            line-height: 22px;
            cursor: pointer;

            font-family: Verdana, Geneva, Tahoma, sans-serif;
            transition: color 0.2s;

            &:hover {
                color: ${darken(0.2, "white")};
            }
        }
    }
`;

export const Body = styled.div`
    color: white;
    margin-left: 50px;

    strong {
        font-size: 40px;
    }

    h1 {
        font-size: 60px;
    }

    button {
        margin-top: 35px;
        border: 1px solid white;
        background: none;
        border-radius: 5px;
        color: white;
        padding: 15px 50px;
        transition: border 0.2s;

        &:hover {
            border: 1px solid ${darken(0.4, "white")};
        }
    }
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: white;
    min-height: 130px;
    margin-left: 50px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        strong {
            font-size: 17px;
            margin-bottom: 13px;
        }

        p {
            margin-bottom: 10px;
            font-size: 12px;
            color: silver;
        }

        svg {
            margin: 15px 0;
            cursor: pointer;
            color: silver;
            transition: color 0.2s;

            &:hover {
                color: white;
            }
        }
    }
`;
