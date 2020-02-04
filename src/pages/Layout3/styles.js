import styled from "styled-components";

import background3 from "../../assets/images/background3.jpg";

export const Container = styled.div`
    background: #191920 url(${background3}) top center;
    background-repeat: no-repeat;
    background-size: cover;

    max-width: 1200px;
    min-width: 400px;
    min-height: 800px;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 50px 50px;
    margin: 20px auto 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: #fff;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        p {
            margin: 0 20px;
            cursor: pointer;
        }

        img {
            margin-right: 60px;
        }

        span {
            margin-right: 30px;
            cursor: pointer;
        }

        button {
            border: 0;
            background: #22272c;
            padding: 10px 25px;
            color: #fff;
            border-radius: 7px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
            transition: opacity 0.2s;
            opacity: 0.9;

            &:hover {
                opacity: 1;
            }
        }
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 90px;
    color: #fff;

    div {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;

        /* background: gray; */

        h1 {
            padding: 0 155px;
            font-size: 45px;
            cursor: default;
        }
        p {
            margin-top: 15px;
            margin-bottom: 15px;
            padding: 0 155px;
            font-size: 12px;
            cursor: default;
        }

        button {
            margin: 5px 150px;
            border: 0;
            background: #22272c;
            padding: 15px 25px;
            color: #fff;
            border-radius: 7px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
            opacity: 0.9;
            transition: opacity 0.2s;

            &:hover {
                opacity: 1;
            }
        }

        img {
            margin-top: 40px;
        }
    }
`;

export const Texto = styled.div``;
