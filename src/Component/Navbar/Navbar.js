import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";
import Login from './Component/Login/Login'; // Importar el componente Login

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand text-danger fw-bold fs-1 ff-Apple Chancery" to="/">
      R & M Styles
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="buttons-nav mx-auto mb-1 mb-lg-0 flex-wrap me-auto">
        <li className="btn btn-outline-dark me-2">
          <NavLink className="nav-link active" aria-current="page" to="/" style={{fontSize: '25px', color:"white"}}>Home</NavLink>
        </li>
        <li className="btn btn-outline-dark me-2"  >
          <NavLink className="nav-link" to="/products" style={{fontSize: '25px',color:"white"}}>Products</NavLink>
        </li>

        <li className="btn btn-outline-dark me-2">
          <NavLink className="nav-link" to="/about" style={{fontSize: '25px', color:"white"}}>About</NavLink>
        </li>
      </ul>
      <div className="buttons ms-auto">
        <Login /> // Agregar el componente Login
        <NavLink to="/register" className="btn btn-outline-dark ms-2">
          <i className="fa solid fa-sign-in me-1"/> Register
        </NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa fa-sign-in-me-1" />Cart({state.length})
        </NavLink>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar;


/* import React from 'react';
import {NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";
import Login from '../Login/Login';



const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand text-danger fw-bold fs-1 ff-Apple Chancery" to="/">
      R & M Styles
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="buttons-nav mx-auto mb-1 mb-lg-0 flex-wrap me-auto">
        <li className="btn btn-outline-dark me-2">
          <NavLink className="nav-link active" aria-current="page" to="/" style={{fontSize: '25px', color:"white"}}>Home</NavLink>
        </li>
        <li className="btn btn-outline-dark me-2"  >
          <NavLink className="nav-link" to="/products" style={{fontSize: '25px',color:"white"}}>Products</NavLink>
        </li>

        <li className="btn btn-outline-dark me-2">
          <NavLink className="nav-link" to="/about" style={{fontSize: '25px', color:"white"}}>About</NavLink>
        </li>
      </ul>
      <div className="buttons ms-auto">
        <NavLink to="/login" className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-1"/> Login
        </NavLink>

        <NavLink to="/register" className="btn btn-outline-dark ms-2">
          <i className="fa solid fa-sign-in me-1"/> Register
        </NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa fa-sign-in-me-1" />Cart({state.length})
        </NavLink>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar; */