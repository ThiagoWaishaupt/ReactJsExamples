import styled from "styled-components";

export const Container = styled.div`
    background: #fff;

    max-width: 1200px;
    min-width: 400px;
    min-height: 800px;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px 50px;
    margin: 20px auto 0 auto;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin: 0 40px;
            cursor: pointer;
            color: gray;
        }
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h1 {
            font-size: 60px;
            font-family: cursive;
        }

        p {
            margin: 50px 0;
            color: gray;
            line-height: 2;
        }

        button {
            max-width: 250px;
        }
    }
`;
