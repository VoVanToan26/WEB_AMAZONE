import config from '~/config';
import HomePage from '~/Pages/Home';
import ProductPage from '~/Pages/Product';
import CartPage from '~/Pages/Cart';
import SigninPage from '~/Pages/Signin';
import RegisterPage from '~/Pages/Register';



// Layouts

// Pages

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.product, component: ProductPage },
    { path: config.routes.cart, component: CartPage },
    { path: config.routes.cartAll, component: CartPage },
    { path: config.routes.signin, component: SigninPage },
    { path: config.routes.register, component: RegisterPage },

];
console.log('publicRoutes', publicRoutes);
const privateRoutes = [];

export { publicRoutes, privateRoutes };
