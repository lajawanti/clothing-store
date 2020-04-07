import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import CartItem from '../cart-item/cart.item.component';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className = 'cart-icon' onClick = { toggleCartHidden }>
        <ShoppingIcon className = 'shopping-icon' />
        <span className = 'item-count'> { itemCount } </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//to display total items in cart at cartIcon
//REDUX selector where it selects portion from STATE here just quantity
const mapStateToProps = ({ cart : { cartItems }}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);