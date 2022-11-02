import React, { useEffect } from 'react';
import Loadingbox from '~/compenents/Loadingbox';
import Messagebox from '~/compenents/Messagebox';
import Product from '~/compenents/Product';

import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '~/actions/productActions';


function HomePage() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
            {loading ? (<Loadingbox></Loadingbox>) 
            : error ? ( <Messagebox variant="danger">{error}</Messagebox>) 
            : (<div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;
