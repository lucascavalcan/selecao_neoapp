import * as C from "./style";
import Logo from "../../images/logo-footer.png";
import Image from "../../images/banner7.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';


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
                        <a href="https://twitter.com/marvel"><TwitterIcon className="logo"/></a>
                        <a href="https://www.instagram.com/marvel/"><InstagramIcon className="logo"/></a>
                        <a href="https://www.youtube.com/marvel"><YouTubeIcon className="logo"/></a>
                        <a href="https://www.facebook.com/MarvelBR/?brand_redir=6883542487"><FacebookIcon className="logo"/></a>
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