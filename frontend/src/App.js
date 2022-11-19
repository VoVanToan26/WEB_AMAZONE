import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { signout } from './actions/userActions';
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
                  (</div>
                )
                : (<Link to="/signin">Sign In</Link>)
            }

          </div>
        </header>
        <main>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  )
}
export default App;
