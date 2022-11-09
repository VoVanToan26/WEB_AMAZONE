/* eslint-disable no-unused-vars */
import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1/fishing_web', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});



app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.send('Sever is ready');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});
const port = process.env.PORT || 5000;
console.log('port', port);
app.listen(port, () => {
    console.log(`Sever at http://localhost:${port}`);
});