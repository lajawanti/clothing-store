import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

// as User should be allowed to change quantity of item or delete item before checkout we need to pass 
//cartItem completely as Props
const CheckoutItem = ({ cartItem, clearItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = 'item'/>
            </div>
            <span className = 'name'>{name}</span>
            <span className = 'quantity'>{quantity}</span>
            <span className = 'price'>{price}</span>

            <div className= 'remove-button' 
                 onClick = {() => clearItem(cartItem)} >
                    &#10005;
            </div>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
