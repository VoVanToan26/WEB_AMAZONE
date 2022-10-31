import express from 'express';
import data from './data.js';
const app = express();
app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.get('/', (req, res) => {
    res.send('Sever is ready');
});

const port = process.env.PORT || 5000;
console.log('port', port);
app.listen(port, () => {
    console.log(`Sever at http://localhost:${port}`);
});