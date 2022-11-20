1. Taoj create react app
   npx create-react-app frontend

2 install react-router-dom

3 Cài đặt customize-cra

4 Cài đặt babel-plugin-module-resolver
tao thu muc tinh
\npm install --save-dev babel-plugin-module-resolver

+12. Add Redux to Home Screen 1. npm install redux react-redux 2. Create store.js 3. initState= {products:[]} 4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload} 5. export default createStore(reducer, initState) 6. Edit HomeScreen.js 7. shopName = useSelector(state=>state.products) 8. const dispatch = useDispatch() 9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data}) 10. Add store to index.js

14. Handle Add To Cart Button
    1. Handle Add To Cart in ProductScreen.js
    2. create CartScreen.js
15. Implement Add to Cart Action
    1. create addToCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
    4. render cartItems.length + Add icon cart

Click add to cart --> Action --> dispatch ({type, payload})--> Store 16. Build Cart Screen 1. create 2 columns for cart items and cart action 2. cartItems.length === 0 ? cart is empty 3. show item image, name, qty and price 4. Proceed to Checkout button 5. Implement remove from cart action 17. Implement Remove From Cart Action 1. create removeFromCart constants, actions and reducers 2. add reducer to store.js 3. use action in CartScreen.js
22. Implement SignIn Action
    1. create signin constants, actions and reducers
    2. add reducer to store.js
    3. use action in SigninScreen.js
23. Create Register Screen
    1. create API for /api/users/register
    2. insert new user to database
    3. return user info and token
    4. create RegisterScreen
    5. Add fields
    6. Style fields
    7. Add screen to App.js
    8. create register action and reducer
    9. check validation and create user
30. Add PayPal Button
    1. get client id from paypal
    2. set it in .env file
    3. create route form /api/paypal/clientId
    4. create getPaypalClientID in api.js
    5. add paypal checkout script in OrderScreen.js
    6. show paypal button
35. Create Admin View
    1. Create Admin Menu
    2. Create Admin Middleware in Backend
    3. Create Admin Route in Frontend
37. Create Product
    1. build create product api
        productRoute.js
    2. build Create Product button
    3. define product create constant, action and reducer
    4. use action in Product List Screen