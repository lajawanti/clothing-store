import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector'; 
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className = 'header'>
        <Link to = '/' className = 'logo-container'>
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link to = '/shop' className = "option">
                SHOP
            </Link>
            <Link to = '/shop' className = "option">
                CONTACT
            </Link>

            {
                currentUser ? (
                <div className = 'option' onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div> ) : (
                <Link to = '/signin' className = 'option'>SIGN IN</Link> )
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })   USING DESTRUCTURING.............. 
const mapStateToProps = (state) => ({
    currentUser :selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);