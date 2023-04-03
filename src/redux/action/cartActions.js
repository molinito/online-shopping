//redux/actions/cartActions.js

// Definimos los tipos de acciones
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

// Acción para añadir un producto al carrito
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// Acción para eliminar un producto del carrito
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

// Acción para actualizar la cantidad de un producto en el carrito
export const updateCartQuantity = (productId, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

// Acción para vaciar el carrito
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
