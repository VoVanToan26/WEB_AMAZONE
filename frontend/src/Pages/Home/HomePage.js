import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loadingbox from '~/compenents/Loadingbox';
import Messagebox from '~/compenents/Messagebox';
import Product from '~/compenents/Product';
function HomePage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fecthData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fecthData();
    }, []);
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
