import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Rating from '~/compenents/Rating';
import { detailsProduct } from '~/actions/productActions';
import Loadingbox from '~/compenents/Loadingbox';
import Messagebox from '~/compenents/Messagebox';

const ProductPage = () => {
    //dispatch() is the method used to dispatch actions and trigger state changes to the store. react-redux is simply trying to give you convenient access to it
    const dispatch = useDispatch();
    var props = useParams();
    const productId = props.id;
    const [qty, setQty] = useState(1);
    //useSelector lấy state từ Redux store bằng cách sử dụng một selector function làm tham số đầu vào
    // /Allows you to extract data from the Redux store state, using a selector function.
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const navigate = useNavigate();
    const addToCartHandler = () => {
        // react routewr 6  v4 is props.history.push()
        navigate(`/cart/${productId}?qty=${qty}`)
    };
    console.log('detailsProduct', detailsProduct)
    // hook 
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
                                            {product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select
                                                                    value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}
                                                                >
                                                                    {[...Array(product.countInStock).keys()].map(
                                                                        (x) => (
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={addToCartHandler}
                                                            className="primary block"
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </li>
                                                </>
                                            )}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </div>

    );
}

export default ProductPage