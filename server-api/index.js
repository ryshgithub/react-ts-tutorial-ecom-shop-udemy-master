const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(bodyParser.json());

/** Enable Cors */;
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/product', productRouter);
app.use('/order', orderRouter);

app.listen(1234);
