1. Taoj create react app 
npx create-react-app frontend

2 install react-router-dom

3  Cài đặt customize-cra

4 Cài đặt babel-plugin-module-resolver
 tao thu muc tinh
 \npm install --save-dev babel-plugin-module-resolver

+12. Add Redux to Home Screen
    1. npm install redux react-redux
    2. Create store.js
    3. initState= {products:[]}
    4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
    5. export default createStore(reducer, initState)
    6. Edit HomeScreen.js
    7. shopName = useSelector(state=>state.products)
    8. const dispatch = useDispatch()
    9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
    10. Add store to index.js