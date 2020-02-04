import styled from "styled-components";
import { darken } from "polished";
import background4 from "../../assets/images/background4.jpg";

export const Container = styled.div`
    background: #191920 url(${background4}) top center;
    background-repeat: no-repeat;
    background-size: cover;

    max-width: 1200px;
    min-width: 400px;
    min-height: 800px;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px 50px;
    margin: 20px auto 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-bottom: 50px;
    cursor: default;

    h1 {
        color: #fff;
        font-size: 50px;
        margin-bottom: 20px;
    }

    p {
        color: #fff;
        font-size: 17px;
    }

    > strong {
        margin-top: 15px;
        color: #fff;
        font-size: 10px;
        cursor: pointer;

        &:hover {
            color: ${darken(0.1, "#fff")};
        }

        svg {
            height: 10px;
        }
    }
`;

export const ItensMenu = styled.div`
    span {
        padding: 15px;
        color: #fff;
        border-radius: 10px;
        margin: 0 1px;
        cursor: pointer;
        transition: background 0.1s;

        &:hover {
            background: #042e38;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        svg {
            height: 10px;
            color: #f2762e;
        }
    }
    button {
        border: 0;
        border-radius: 50px;
        background: none;
        padding: 10px 23px;
        font-size: 11px;
        color: #fff;
        margin-left: 20px;
        background: linear-gradient(to right, #fc5344, #feb045);
        transition: padding 0.2s;

        &:hover {
            padding: 13px 23px;
        }
    }
`;

export const Alert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: linear-gradient(to right, #fc5344, #feb045);
    border: 0;
    border-radius: 10px;
    padding: 10px 12px;
    color: #fff;
    margin-top: 30px;
    cursor: default;

    svg {
        height: 15px;
        width: 15px;
        margin-right: 10px;
        margin-bottom: 3px;
    }

    strong {
        margin: 0 5px;
        font-size: 17px;
    }

    span {
        background: #c67636;
        border-radius: 5px;
        margin: 0 2px;
        padding: 7px;
    }

    p {
        font-size: 16px;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: default;

    background: #fff;
    border: 0;
    border-radius: 15px;
    padding: 15px 15px 10px 15px;
    margin: 0 10px;

    svg {
        color: #fc5344;
        width: 25px;
        height: 25px;
        margin: 0 15px 42px 5px;
    }

    > p {
        margin-top: 70px;
        font-size: 11px;
        color: #4150af;
        cursor: pointer;
    }
`;

export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > strong {
        font-size: 18px;
        color: #2d3e73;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
        color: gray;
    }
`;
