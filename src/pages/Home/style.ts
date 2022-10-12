import styled from "styled-components";
import bgBanner from "../../images/banner10.jpg";

export const Container = styled.div`


    .listItem {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 50px;

        @media (max-width: 1120px) {
            grid-template-columns: repeat(3, 1fr);
        }

    }

    @media (max-width: 900px) {
        margin-left: 50px;
    }
`;

export const Banner = styled.div`
    height: 500px;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${bgBanner});

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 900px) {
        width: 1000px;
        margin-left: -100px;
    }
`;

export const Button = styled.div`
    margin-top: 30px;
    margin-left: 80px;

    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    display: block;
    border: 2px solid #fff;
    padding: 20px;
    font-size: 18px;
    border-radius: 4px;
    transition: all 0.4s ease;

    &:hover {
        border: 2px solid #777;

        a {
            color: #777
        }
    }

    a {
        text-decoration: none;
        color: #fff;

    }


`;

export const Text = styled.div`
    margin-left: 80px;
    font-size: 35px;
    color: #fff;
`;