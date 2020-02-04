import styled from "styled-components";

export const Container = styled.div`
    background: #503e9d;

    max-width: 1200px;
    min-width: 400px;
    min-height: 800px;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px 50px;
    margin: 20px auto 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Principal = styled.div`
    padding: 40px 60px;

    display: flex;
    flex: 1;
    display: flex;
    flex-direction: column;

    border: 0;
    border-radius: 50px;

    margin-left: 45px;
    background: #fff;

    h1 {
        margin-top: 40px;
        margin-bottom: 15px;
        font-size: 20px;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* margin: 30px 50px; */

    svg {
        color: black;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    input {
        display: flex;
        flex: 1;

        border: 0;
        background: #f6f6f5;
        border-radius: 10px;
        padding: 10px 20px;
        margin-right: 70px;
        margin-left: 10px;
        font-size: 12px;

        color: gray;
    }

    button {
        margin-left: 20px;
    }
`;
