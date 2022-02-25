import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


const Home= ({greeting}) => {
    return(
        <section className="home">
            <div>
            <h1>{greeting}</h1>
            <span>¡Nos alegra verte de nuevo!</span>
            </div>
            <ItemListContainer/>
        </section>

    )

}
export default Home