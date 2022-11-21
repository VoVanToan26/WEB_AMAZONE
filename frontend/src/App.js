import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { signout } from '~/actions/userActions';
import PrivateRoute from './compenents/PrivateRoute/PrivateRoute';
function App() {
  // add count cart
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="./">amazona</Link>
          </div>
          <div className='Carrt' style={{ position: 'relative' }}>
            <Link to="/cart">
              Cart <FontAwesomeIcon style={{ 'fontSize': '2.5rem' }} icon={faCartShopping} />
              {cartItems.length > 0 && (
                <span style={{ position: 'relative', top: '-1rem' }} className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo
                ? (<div className='dropdown'>
                  <Link to="#">
                    {userInfo.name}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Link>

                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Order History</Link>
                    </li>
                  </ul>
                </div>
                )
                : (<Link to="/signin">Sign In</Link>)
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">Admin
                  <FontAwesomeIcon icon={faCaretDown} />
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              console.log("page", Page)
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact} 
                  element={
                    (route.private)
                      ? <PrivateRoute isAllowed={userInfo && ((route.isAdminPage && userInfo.isAdmin) || !route.isAdminPage)}  redirectPath={`/signin?redirect=${route.path}`} > <Page  /></PrivateRoute>
                      : <Page />} />
              )
            })}
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  )
}
export default App;
