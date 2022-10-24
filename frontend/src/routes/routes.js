import config from '~/config';
import HomePage from '~/Pages/Home';
import ProductPage from '~/Pages/Product';

// Layouts

// Pages

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.product, component: ProductPage }
];
console.log('publicRoutes', publicRoutes);
const privateRoutes = [];

export { publicRoutes, privateRoutes };
