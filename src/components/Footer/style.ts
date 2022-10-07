import styled from "styled-components";

export const Container = styled.div`
    background-color: #131a1a;
    height: 250px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    color: #eee;
    margin-top: 200px
`;

export const FooterTop = styled.div`
    height: 210px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const FooterLogo = styled.div`

`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        margin-bottom: 10px;
        transition: all 0.3s ease;

        &:hover {
            color: #777;
        }
    }
`;

export const FooterImage = styled.div`
    margin-top: -200px;
    margin-right: -60px;
`;

export const FooterSocial = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SocialLinks = styled.div`

`;

export const FooterBottom = styled.div`
    height: 40px;
    color: #555;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const FotterBotomLeft = styled.div`
    margin-left: -290px;
`;

export const FooterBottomRight = styled.div`
    margin-right: -280px;
    font-size: 14px;
`;