import config from '~/config';
import HomePage from '~/Pages/Home';
import ProductPage from '~/Pages/Product';
import CartPage from '~/Pages/Cart';
import SigninPage from '~/Pages/Signin';
import RegisterPage from '~/Pages/Register';
import ShippingAddressPage from '~/Pages/Shipping';
import PaymentPage from '~/Pages/Payment';
import PlaceOrderPage from '~/Pages/PlaceOrder';
import OrderPage from '~/Pages/Order';
import OrderHistoryPage from '~/Pages/OrderHistory';
import ProfilePage from '~/Pages/Profile';
import ProductListPage from '~/Pages/ProductList';
import ProductEditPage from '~/Pages/ProductEdit';
import OrderListPage from '~/Pages/OrderList';

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
    { path: config.routes.shipping, component: ShippingAddressPage },
    { path: config.routes.payment, component: PaymentPage },
    { path: config.routes.placeOrder, component: PlaceOrderPage },
    { path: config.routes.order, component: OrderPage },
    { path: config.routes.orderHistory, component: OrderHistoryPage },
    { path: config.routes.profile, component: ProfilePage, private: true },
    { path: config.routes.productList, component: ProductListPage, private: true, isAminPage: true, exact: true },
    { path: config.routes.productEdit, component: ProductEditPage, private: true, isAminPage: true },
    { path: config.routes.orderList, component: OrderListPage, private: true, isAminPage: true },
    
];
console.log('publicRoutes', publicRoutes);
const privateRoutes = [];

export { publicRoutes, privateRoutes };
