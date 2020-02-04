import styled from "styled-components";
import programming from "../../assets/images/programming.jpg";
import street from "../../assets/images/street.jpg";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    min-height: 150px;
`;

export const Live1 = styled.div`
    background: #999 url(${programming}) top center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-height: 150px;
    min-width: 90px;
    max-width: 100px;
    padding: 7px 0;
    margin-right: 20px;

    cursor: pointer;

    img {
        border-radius: 50px;
        border: 2px solid #f25a38;
        width: 50px;
        height: 50px;
    }

    span {
        color: #fff;
        background: #f25a38;
        font-size: 9px;
        padding: 5px;
        border-radius: 6px;
    }
`;

export const Live2 = styled.div`
    background: #999 url(${street}) top center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    min-height: 150px;
    min-width: 90px;
    max-width: 100px;
    padding: 7px 0;
    margin-right: 20px;

    cursor: pointer;

    img {
        border-radius: 50px;
        border: 2px solid #f25a38;
        width: 50px;
        height: 50px;
    }

    span {
        color: #fff;
        background: #f25a38;
        font-size: 9px;
        padding: 5px;
        border-radius: 6px;
    }
`;
