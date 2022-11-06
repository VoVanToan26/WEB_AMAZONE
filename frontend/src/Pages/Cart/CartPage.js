import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/actions/cartActions';

function CartPage() {
    const urlGetData = new URLSearchParams(window.location.search)
    const props = useParams()
    console.log('props', props)
    const productId = props.id;
    const qty = urlGetData.get('qty')||1

    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
        </div>
    );
}
export default CartPage;