import styled from "styled-components";
import bgHeader from "../../images/bg-black-and-white-1.png";

export const Container = styled.div`
    height: 200px;
    width: 100vw;
    background-color: #131a1a;
    background-image: url(${bgHeader});
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`;

export const HeaderLogo = styled.div`
    margin-left: 30px;
    cursor: pointer;
`;

export const HeaderMenu = styled.div`
    margin-right: 30px;
    font-size: 18px;
    display: flex;

    ul {
        display: flex;
        flex-direction: row; 
        list-style: none;
        align-items: center;
        justify-content: center;

        a {
            text-decoration: none;
            background-color: #E4F0F2;
            color: #000;
            font-weight: bold;
            display: block;
            border: 1px solid #ccc;
            padding: 20px;
            font-size: 18px;
            margin: 18px;
            transition: all 0.3s ease;

            &:hover {
                color: #f00;
            }
        }

    };
`;