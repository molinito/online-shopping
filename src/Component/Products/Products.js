import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import "./Products.css"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products/');

      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex flex-wrap justify-content-center text-center mb-5 pb-5" >
  <button className="btn btn-outline-dark me-2" style={{fontSize:"20px"}} onClick={() => setFilter(data)}>
    All
  </button>
  <button className="btn btn-outline-dark me-2" style={{fontSize:"20px"}} onClick={() => filterProduct("men's clothing")}>
    Men's Clothing
  </button>
  <button className="btn btn-outline-dark me-2" style={{fontSize:"20px"}} onClick={() => filterProduct("women's clothing")}>
    Women's Clothing
  </button>
  <button className="btn btn-outline-dark me-2" style={{fontSize:"20px"}} onClick={() => filterProduct('jewelery')}>
    Jewelery
  </button>
  <button className="btn btn-outline-dark me-2" style={{fontSize:"20px"}} onClick={() => filterProduct('electronics')}>
    Electronics
  </button>
</div>
        <div className="row">
          {filter.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 18)}...</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link to={{ pathname: `/products/${product.id}`, id: product.id }} className="btn btn-primary">
                    Buy
                  </Link>
                </div>
              </div>
            </div>
           ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Trends of Season</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        </div>
    </div>
    );
};

export default Products;




