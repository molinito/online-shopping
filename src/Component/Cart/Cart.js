//  crear en este componente el código para poder ver en pantalla los productos agregados al carrito.
// 1. Importar los hooks de react-redux
// 2. Importar las acciones de redux
// 3. Crear las variables para poder usar los hooks
// 4. Crear las funciones para poder usar las acciones de redux
// 5. Crear la variable para poder calcular el total del carrito
// 6. Crear la estructura de la tabla para mostrar los productos agregados al carrito
// 7. Crear la estructura de la tabla para mostrar el total del carrito
// 8. Crear la estructura de la tabla para mostrar el botón para vaciar el carrito
// 9. Crear la estructura de la tabla para mostrar el botón para ir a la página de checkout
// 10. Crear la estructura de la tabla para mostrar el botón para ir a la página de productos
// 11. Crear la estructura de la tabla para mostrar el botón para ir a la página de inicio

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from "../../redux/actions/cartActions.js";


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  }

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h3>Your Cart ({cart.length})</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-sm btn-secondary" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h3>Cart Total</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${cartTotal}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>${(cartTotal * 0.1).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${(cartTotal * 1.1).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-danger btn-block" onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
          <button className="btn btn-success btn-block">Checkout</button>
          <button className="btn btn-primary btn-block">Continue Shopping</button>
          <button className="btn btn-secondary btn-block">Go Home</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;



/* 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from "../../redux/actions/cartActions.js";


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  }

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h3>Your Cart ({cart.length} items)</h3>
          {cart.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <button className="btn btn-sm btn-secondary" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="btn btn-sm btn-secondary" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td><button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromCart(item.id)}>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p className="card-text">Total: ${cartTotal}</p>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; */ 
