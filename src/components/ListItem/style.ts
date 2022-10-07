import styled from "styled-components";
import bgHeader from "../../images/bg-black-and-white-1.png";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .5s;
`;

export const Area = styled.div`
    text-align: center;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-left: 20px;
    cursor: pointer;
`;

export const Image = styled.div`
    box-shadow:0px 0px 50px rgba(0, 0, 0, 0.4);
    background-image: url(${bgHeader});
        img {
            transform: scale(1);
            transition: all ease 0.3s;

            &:hover {
                transform: scale(1.1);
            }
        }
`;

export const Title = styled.div`
    font-weight: bold;
`;

export const Price = styled.div`
    font-size:14px;
    color:#000;
    width: 200px;
    text-align: center;
`;

export const Info = styled.div`
    font-size:14px;
    color:#000;
    margin-top:10px;
    width: 200px;
    height: 104px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        color: #f00;
    }

`;