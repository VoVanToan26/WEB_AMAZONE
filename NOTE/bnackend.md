1. npm init
2.npm  i expreess
3.npm install express

4. Suwar type in package.json type::"module"
5  node backend/server.js to run sever

6 Cai va chay node mon de debug

 npm install --save-dev nodemon   
  "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js",


Bai 10 
7 npm i axios 
AXIOS IS A LIBRARY TO  SEND REUQETS TO SEVER

8 set proxy in package.json  in front end  "proxy": "http://127.0.0.1:5000",   to get data


18. 7.1 Create Sample Users In MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create models/productModel.js
    9. create productSchema and productModel
    10. create userRoute
    11. Seed sample data