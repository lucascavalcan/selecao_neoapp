import styled from "styled-components";
import bgHeader from "../../images/bg-black-and-white-1.png";

export const Container = styled.div`
    height: 200px;
    width: 100%;
    background-color: #131a1a;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${bgHeader});
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;

    @media (max-width: 1120px) {
        margin-bottom: 0;
    }

    @media (max-width: 1000px) {
        width: 1000px;
    }
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

        .menuItem {
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

    @media (max-width: 1120px) {
        display: none;
    }
`;

export const MenuMobile = styled.div`
    display: none;
    margin-right: 40px;
    div {
        height: 15px;
        width: 70px;
        background-color: #333;
        border: #eee;
        border-radius: 10px;
        margin-top: 10px;
        margin-right: 20px;
    }

    @media (max-width: 1120px) {
        display: block;
    }
`;

export const MenuMobileLinks = styled.div`
    display: none;
    background-color:rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
    height: 400px;
    width: 100%;

    @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;

        justify-content: center;
        font-family: 'Rubik', sans-serif;
        transition: all 0.5s ease;
        
        ul {
            display: flex;
            flex-direction: column; 
            list-style: none;
            align-items: flex-end;
            margin-right: 50px;
            justify-content: center;
    
            li {
                margin-top: 30px;
            }

            .menuItem {
                text-decoration: none;
                color: #fff;
                font-size: 35px;
                margin-left: 44px;

                &:hover {
                    background-color: #033434;
                    color: #50ECE9;
                }
            }
        };
    }   
    
    @media (max-width: 1000px) {
        width: 1000px;
    }
`;