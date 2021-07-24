import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import studioBag from '../../assets/kitchen2-unsplash.jpg';
import './main-section.styles.scss';

const MainSection = ({history}) => {
    return (
        <div className='main-section-container'>
            <div className='main-section-middle'>
                <div className='ms-m-image'>
                    <img src={studioBag} alt="studioBag" />
                </div>
                <div className='ms-m-description'>
                    <h2>Em Casa Store</h2>
                    <p>
                        Nós temos o que há de melhor no mundo da decoração e estilização de sua cozinha.
                        Somos uma empresa com mais de 10 anos de mercado e atendemos a pedidos de todo o Brasil.

            
                    </p>
                    <button className='button is-black' id='shop-now' onClick={()=> history.push('/shop')}>
                    <nav>
                        <Link to="/shop">COMPRE JÁ</Link>
                    </nav>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MainSection);