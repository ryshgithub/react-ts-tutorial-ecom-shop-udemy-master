const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

const productsJsonPath = path.join(__dirname, '/products.json');
const products = JSON.parse(fs.readFileSync(productsJsonPath, { encoding: 'utf-8' }));

app.use(bodyParser.json());

/** Enable Cors */;
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

/** Get All Products
 * Query params - page/size
 * http://localhost:1234/products?page=2&size=3
 * http://localhost:1234/products?size=3
 * http://localhost:1234/products
 */
app.get('/products', (req, res) => {
    const { page, size } = req.query;
    const data = {};
    let productsToReturn = [];
    if((page && size) || size) {
        let currentPage = 1;
        let currentSize = 0;
        const pageInt = parseInt(page) || 1;
        const sizeInt = parseInt(size);
        data.page = pageInt;

        products.forEach((product) => {
            if(currentSize === sizeInt) {
                currentPage++;
                currentSize = 0;
            }

            if(currentPage === pageInt) {
                productsToReturn.push(product);
            } else if(currentPage > pageInt) {
                data.nextPage = true;
            }

            currentSize++;
        });
    } else {
        productsToReturn = products;
    }

    data.productsCount = productsToReturn.length;
    data.products = productsToReturn;

    res.json(data);
});

/** Add/Update product
 * http://localhost:1234/product
 * Sample Format
 * { 
 *      product: { id, category, title, etc.. } 
 * }
 * Ids will be created here
 * If product ID exist, then it is an update
*/
app.post('/product', (req, res) => {
    const { product } = req.body;

    if(product.id) {
        const productId = product.id;
        const currentIndex = products.findIndex((product) => product.id === productId);

        product.variants.forEach((variant, index) => {
            if(!variant.id) variant.id = `var-${(+new Date()) + index}`;
        });
        
        products[currentIndex] = product;
    } else {
        product.id = `prod-${+new Date()}`;
        product.variants.forEach((variant, index) => {
            variant.id = `var-${(+new Date()) + index}`;
        });

        products.push(product);
    }

    res.json({ product });
});

/** Delete Product 
 * http://localhost:1234/product/prod-1
*/
app.delete('/product/:productId', (req, res) => {
    const { productId } = req.params;
    const currentIndex = products.findIndex((product) => product.id === productId);

    if(currentIndex === -1) {
        res.status(400).json({ error: 'Product does not exist' });
    } else {
        products.splice(currentIndex, 1);

        res.json({ productId });
    }
});

app.listen(1234);