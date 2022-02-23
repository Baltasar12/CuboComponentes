//Header
import React from "react";

export default function NavBar(props){
    return(
        <header className="row block center">
            <div>
                <a href="#"><h1>CUBO</h1></a>
            </div>
            <div>
                <a href="#/Cart">Cart</a> <a href="#/SingIn">SingIn</a>
            </div>
        </header>
    );
}