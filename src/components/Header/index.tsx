import * as C from "./style";
import Logo from "../../images/logo.png"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <C.Container>
            <C.HeaderLogo>
                <img src={Logo} width="230" alt=""/>
            </C.HeaderLogo>
            <C.HeaderMenu>
                <ul>
                    <li><Link to="/cart" className="menuItem">CARRINHO</Link></li>
                    <li><Link to="/" className="menuItem">HOME</Link></li>
                    <li><a href="#Products" className="menuItem">PRODUTOS</a></li>
                    <li><a href="#Footer" className="menuItem">CONTATO</a></li>
                </ul>
            </C.HeaderMenu>
        </C.Container>
    )
}