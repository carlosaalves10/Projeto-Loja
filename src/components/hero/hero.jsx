import React from 'react';
import './hero.styles.scss';
import {Link} from 'react-router-dom';


const Hero = () =>{
    return (
        <section className="hero is-large is-info hero-image">
        <div className="hero-body">
            <p className="hero-title">
            Cozinha reimaginada com o melhor para o seu lar!
            </p>
            <div className='shop-now-btn'>
               <button className='button is-black' id='shop-now'>
                <nav>
                        <Link to="/shop">COMPRE AGORA</Link>
                </nav>
                </button> 
            </div>
        </div>
        </section>
    );
}

export default Hero;