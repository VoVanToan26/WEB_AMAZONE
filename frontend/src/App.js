import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function App() {
  // add count cart
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="./">amazona</Link>
          </div>
          <div className='Carrt' style={{position:'relative'}}>
            <Link to="/cart">
              Cart <FontAwesomeIcon style={{ 'fontSize': '2.5rem' }} icon={faCartShopping}/>
              {cartItems.length > 0 && (
                <span style={{ position: 'relative', top:'-1rem' }} className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
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
