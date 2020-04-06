export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id 
    );

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id  
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem       
        )
    }
    
    //else return cartItems as new array with cartItemToAdd by adding quantity property to it with value 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

};