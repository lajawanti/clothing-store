//Selectors created using Reselect’s createSelector function are memoized. 
//mean that the function remembers the arguments passed-in the last time it was invoked and doesn’t recalculate if the arguments are the same
//little bit like caching.

//creating selectors either in the same file as your reducers, or in their own separate file

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
                      accumalatedQuantity + cartItem.quantity
        , 0)
    
)