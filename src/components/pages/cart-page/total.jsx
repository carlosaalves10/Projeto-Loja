import React from 'react';
import { withRouter } from 'react-router';

const Total = ({itemCount, total, history, clearCart}) => {
    return(
        <div className='total-container'>
            <div className='total'>
            <p>Total de Itens: {itemCount}</p>
            <p>{`Total: R$${total}`}</p>
            </div>
            <div className='checkout'>
                <button 
                className='button is-black' 
                onClick={() => history.push('/checkout')}>CHECKOUT</button>
            <button className='button is-white' onClick={() => clearCart()}>LIMPAR</button>
            </div>
        </div>
    );
}

export default withRouter (Total);