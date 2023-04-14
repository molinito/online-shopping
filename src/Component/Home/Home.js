import React from "react";
import clothes from '../../../src/Image/shopping.jpg'
import Products from "../Products/Products";


const Home =() => {
    return (
        <div className="hero bg-info">
            <div className="card text-bg-dark text-black border-0">
                <img src={clothes} className="card-img" alt="background" height="100%"/>   

        </div>
        <Products/>

        </div>
    );
};

export default Home;

