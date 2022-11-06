import React from 'react';
import { useParams } from 'react-router-dom';

function CartPage() {
    const urlGetData = new URLSearchParams(window.location.search)
    const props = useParams()
    console.log('props', props)
    const productId = props.id;
    const qty = urlGetData.get('qty')||1
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