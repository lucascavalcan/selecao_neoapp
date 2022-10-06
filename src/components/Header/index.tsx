import * as C from "./style";
import Logo from "../../images/logo.png"

export const Header = () => {
    return (
        <C.Container>
            <C.HeaderLogo>
                <img src={Logo} width="230" alt=""/>
            </C.HeaderLogo>
            <C.HeaderMenu>
                <ul>
                    <li><a href="">CARRINHO</a></li>
                    <li><a href="">HOME</a></li>
                    <li><a href="">PRODUTOS</a></li>
                    <li><a href="">CONTATO</a></li>
                </ul>
            </C.HeaderMenu>
        </C.Container>
    )
}