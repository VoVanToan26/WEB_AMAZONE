import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loadingbox from "~/compenents/Loadingbox";
import Messagebox from "~/compenents/Messagebox";
import Product from "~/compenents/Product";

import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "~/actions/productActions";
import { listTopSellers } from "~/actions/userActions";
import { Link } from "react-router-dom";


function HomePage() {
    const userTopSellersList = useSelector((state) => state.userTopSellersList);
    const { loading: loadingSellers, error: errorSellers, users: sellers } = userTopSellersList;
    console.log("userTopSellersList", userTopSellersList);
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({}));
        dispatch(listTopSellers());
    }, [dispatch]);
    return (
        <div>
            <h2>Top Sellers</h2>
            {loadingSellers ? (
                <Loadingbox></Loadingbox>
            ) : errorSellers ? (
                <Messagebox variant="danger">{errorSellers}</Messagebox>
            ) : (
                <>
                    {sellers.length === 0 && <Messagebox>No Seller Found</Messagebox>}
                    <Carousel showArrows autoPlay showThumbs={false}>
                        {sellers.map((seller) => (
                            <div key={seller._id} className="containerSeller">
                                <Link to={`/seller/${seller._id}`}>
                                    <img src={seller.seller.logo} alt={seller.seller.name} />
                                    <p className="legend">{seller.seller.name}</p>
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                </>
            )}
            <h2>Featured Products</h2>
            {loading ? (
                <Loadingbox></Loadingbox>
            ) : error ? (
                <Messagebox variant="danger">{error}</Messagebox>
            ) : (
                <>
                    {products.length === 0 && <Messagebox>No Product Found</Messagebox>}
                    <div className="row center">
                        {products.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default HomePage;
