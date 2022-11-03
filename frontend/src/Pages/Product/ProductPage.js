import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Rating from '~/compenents/Rating';
import { detailsProduct } from '~/actions/productActions';
import Loadingbox from '~/compenents/Loadingbox';
import Messagebox from '~/compenents/Messagebox';
const ProductPage = (props) => {
    console.log('props',props)
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div>
            {loading ? (<Loadingbox></Loadingbox>)
                : error ? (<Messagebox variant="danger">{error}</Messagebox>)
                    : (
                        <div>
                            <Link to="/">Back to result</Link>
                            <div className="row top">
                                <div className="product-item col-2">
                                    <img className="large" src={product.image} alt={product.name}></img>
                                </div>
                                <div className="product-item  col-1">
                                    <ul>
                                        <li>
                                            <h1>{product.name}</h1>
                                        </li>
                                        <li>
                                            <Rating
                                                rating={product.rating}
                                                numReviews={product.numReviews || '0'}
                                            ></Rating>
                                        </li>
                                        <li>Pirce : ${product.price}</li>
                                        <li>
                                            Description:
                                            <p>{product.description}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-item  col-1">
                                    <div className="card card-body">
                                        <ul>
                                            <li>
                                                <div className="row">
                                                    <div>Price</div>
                                                    <div className="price">${product.price}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div>Status</div>
                                                    <div>
                                                        {product.countInStock > 0 ? (
                                                            <span className="success">In Stock</span>
                                                        ) : (
                                                            <span className="error">Unavailable</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="primary block">Add to Cart</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </div>

    );
}

export default ProductPage;
