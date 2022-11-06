import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

function Product({ product }) {
    console.log(product)
    return (
        <div key={product._id} className="card">
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating
                    rating={product.rating}
                    numReviews={product.numberReviews}
                ></Rating>
                <div className="price">${product.price}</div>
            </div>
        </div>
    );
}
export default Product;