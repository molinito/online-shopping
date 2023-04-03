import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../redux/actions/cartActions';

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

export default Cart;

