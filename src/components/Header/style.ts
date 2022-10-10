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

    div {
        height: 10px;
        width: 70px;
        background-color: #E4F0F2;
        border-radius: 10px;
        margin-top: 10px;
    }

    @media (max-width: 1120px) {
        display: block;
    }
`;

export const MenuMobileLinks = styled.div`
    display: none;
    background-color: #50ECE9;
    transition: all 0.5s ease;

    @media (max-width: 1120px) {
        display: flex;
        flex-direction: column;
        font-family: 'Rubik', sans-serif;
        transition: all 0.5s ease;
        
        ul {
            display: flex;
            flex-direction: column; 
            list-style: none;
            align-items: flex-end;
            margin-right: 30px;
            justify-content: center;
    
            li {
                margin-top: 15px;
            }

            .menuItem {
                text-decoration: none;
                color: #033434;
                font-size: 25px;
                margin-left: 44px;

                &:hover {
                    background-color: #033434;
                    color: #50ECE9;
                }
            }
        };
    }   
    
    @media (max-width: 580px) {
        margin-top: 70px;
   
    }
`;