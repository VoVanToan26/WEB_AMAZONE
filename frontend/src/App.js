import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">amazona</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
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
