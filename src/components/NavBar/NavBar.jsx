import React from "react"
import cubo1 from "./cubo1.png"
import './NavBar.scss'
import CartWidget from '../Cart/CartWidget/CartWidget';

const NavBar = () => {

    return(
        <nav className="navbar-items">
            <div className="navbar-logo">
                <img src={cubo1} alt={"logo"}/>
            </div>
            <ul className="nav-menu">
                <li className="nav-link"><a href="#singin">SingIn</a></li>
                <li className="nav-link-cart"><a href="#cart"><CartWidget/></a></li>
            </ul>
            </nav>
    )

}
export default NavBar;