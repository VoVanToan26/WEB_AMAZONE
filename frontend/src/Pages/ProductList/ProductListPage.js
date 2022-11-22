import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, listProducts } from '~/actions/productActions';
import LoadingBox from '~/compenents/Loadingbox';
import Messagebox from '~/compenents/Messagebox';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '~/constants/productConstants';



export default function ProductListPage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const productCreate = useSelector((state) => state.productCreate);
    const { loading, error, products } = productList;
    console.log('productList', productList)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate;


    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete;


    console.log('productCreate', productCreate)
    useEffect(() => {
        if (successCreate) {
            dispatch({ type: PRODUCT_CREATE_RESET });
            navigate(`/product/${createdProduct._id}/edit`);
        }
        if (successDelete) {
            dispatch({ type: PRODUCT_DELETE_RESET });
        }
        dispatch(listProducts());
    }, [createdProduct, dispatch, navigate, successCreate, successDelete]);
    const deleteHandler = (product) => {
        /// TODO: dispatch delete action
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteProduct(product._id));
        }
    };
    const createHandler = () => {
        /// TODO dispatch add acttion
        dispatch(createProduct())
    }

    return (
        <div>
            <div className="row">
                <button type="button" className="primary" onClick={createHandler}>
                    Create Product
                </button>
            </div>
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <Messagebox variant="danger">{errorCreate}</Messagebox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <Messagebox variant="danger">{error}</Messagebox>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() =>
                                            navigate(`/product/${product._id}/edit`)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => deleteHandler(product)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}