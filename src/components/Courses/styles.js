import styled from "styled-components";
import macbook from "../../assets/images/macbook.jpg";
import montain from "../../assets/images/montain.jpg";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
`;

export const Course1 = styled.div`
    margin-right: 5px;

    background: #fff url(${macbook}) top center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;

    min-height: 300px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px 30px;

    > span {
        color: #fff;
        padding: 10px;

        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
    }
`;

export const Course2 = styled.div`
    margin-left: 5px;

    background: #fff url(${montain}) top center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    padding: 20px 30px;

    > span {
        color: #fff;
        padding: 10px;

        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 15px;
    }
`;

export const Teacher = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        border-radius: 50px;
        border: 2px solid #f25a38;
        width: 40px;
        height: 40px;
    }

    div {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;

        margin-left: 15px;

        strong {
            color: #fff;
        }

        span {
            color: #f9f9f9;
            margin-top: 8px;
            font-size: 12px;
        }
    }
`;
