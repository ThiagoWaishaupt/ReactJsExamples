import styled from "styled-components";
import support from "../../assets/images/support.jpg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-top: 50px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    color: #fff;

    h1 {
        background: #6553b2;
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 19px;

        & + h1 {
            background: none;
        }
    }
`;

export const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: #fff;

    strong {
        display: flex;
        align-items: center;

        font-size: 15px;
        padding: 12px;
        border-radius: 50px;
        transition: background 0.15s;

        cursor: pointer;

        svg {
            color: #888be0;
            width: 20px;
            height: 20px;
            margin-right: 17px;
        }

        &:hover {
            background: #fff;
            color: #f25a38;

            svg {
                color: #f25a38;
            }
        }
    }
`;

export const Support = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding-left: 25px;
    padding-top: 25px;

    background: #fff url(${support}) top center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;

    width: 200px;
    height: 250px;
    margin-bottom: 50px;

    strong {
        color: #fff;
        margin-bottom: 8px;
    }

    p {
        color: #888be0;
        margin-bottom: 12px;
    }
`;
