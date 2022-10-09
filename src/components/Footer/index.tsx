import * as C from "./style";
import Logo from "../../images/logo-footer.png";
import Image from "../../images/banner7.jpg";

export const Footer = () => {
    return (
        <C.Container id="Footer">
            <C.FooterTop>
                <C.FooterLogo>
                    <img src={Logo} width="90" height="100" alt=""/>
                </C.FooterLogo>

                <C.FooterLinks>

                        <a href="https://www.marvel.com/corporate/about">SOBRE A MARVEL</a>
                        <a href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA">DISNEY+</a>
                        <a href="https://www.marvelhq.com/">MARVELHQ.COM</a>

                </C.FooterLinks>

                <C.FooterSocial>
                    SIGA-NOS!
                    <C.SocialLinks>
                        <a href="https://twitter.com/marvel">TWITTER</a>
                        <a href="https://www.instagram.com/marvel/">INSTAGRAM</a>
                        <a href="https://www.youtube.com/marvel">YOUTUBE</a>
                        <a href="https://www.facebook.com/MarvelBR/?brand_redir=6883542487">FACEBOOK</a>
                    </C.SocialLinks>

                </C.FooterSocial>

                <C.FooterImage>
                    <img src={Image} width="500"/>
                </C.FooterImage>

            </C.FooterTop>

            <C.FooterBottom>
                <C.FotterBotomLeft>
                    © <strong>MARVEL</strong> Todos os direitos reservados.
                </C.FotterBotomLeft>

                <C.FooterBottomRight>
                    Feito com ❤️ Criado por Lucas Cavalcanti
                </C.FooterBottomRight>
            </C.FooterBottom>
        </C.Container>
    )
}