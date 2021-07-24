import React from 'react';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import './header.styles.scss';


const Header = () => {
    return(
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'>EM CASA</Link>
            </div>
            <ul>
                <li>
                <Link to='/'>
                    Início
                </Link>
                </li>
                <li>
                <Link to='/shop'>
                    Coleção
                </Link>
                </li>
                
            </ul>
            <CartIcon />
        </nav>
    );
}

export default Header;