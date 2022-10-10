import * as C from "./style";
import { useState } from "react";
import Logo from "../../images/logo.png"
import {Link} from "react-router-dom";

export const Header = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    function openToggle() {
        if (showMenu === false) {
            setShowMenu(true)
        } else setShowMenu(false)
    }

    return (
        <>
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

            <C.MenuMobile onClick={openToggle}>
                <div></div>
                <div></div>
                <div></div>
            </C.MenuMobile>
        </C.Container>

        {showMenu ?  
            <C.MenuMobileLinks>
                <ul>
                    <li><Link to="/cart" className="menuItem">CARRINHO</Link></li>
                    <li><Link to="/" className="menuItem">HOME</Link></li>
                    <li><a href="#Products" className="menuItem">PRODUTOS</a></li>
                    <li><a href="#Footer" className="menuItem">CONTATO</a></li>
                </ul>
            </C.MenuMobileLinks>
        : null}
        </>
    )
}