import React from 'react';
import Product from '~/compenents/Product';
import data from '~/data';
function HomePage() {
    return (
        <div>
            <div className="row center">
                {
                    data.products.map(product => {
                        console.log(data)
                        return (
                            <Product key={product._id} product={product}></Product>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;
