const express = require('express');
const path = require('path');
const fs = require('fs');
const { hasProductInCategory } = require('../utils');
var router = express.Router();

const productsJsonPath = path.join(__dirname, '../products.json');
const productFiltersJsonPath = path.join(__dirname, '../productFilters.json');

const products = JSON.parse(fs.readFileSync(productsJsonPath, { encoding: 'utf-8' }));
const productFilters = JSON.parse(fs.readFileSync(productFiltersJsonPath, { encoding: 'utf-8' }));

/** Get Product Filters 
 * http://localhost:1234/product/filters
*/
router.get('/filters', (req,res) => {
    res.json({ productFilters })
})

/** Get All Products
 * Query params - page/size/category
 * http://localhost:1234/product/all?page=2&size=3
 * http://localhost:1234/product/all?size=3
 * http://localhost:1234/product/all
 */
router.get('/all', (req, res) => {
    const { page, size, category } = req.query;
    const data = {};
    let productsToReturn = [];

    if((page && size) || size || category) {
        let currentPage = 1;
        let currentSize = 0;
        const pageInt = parseInt(page) || 1;
        const sizeInt = parseInt(size) || products.length;
        data.page = pageInt;

        products.forEach((product) => {
            if(category && !hasProductInCategory(category, product.category)) {
                return ;
            }

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

        data.totalPages = currentPage;
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
router.post('/', (req, res) => {
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
router.delete('/:productId', (req, res) => {
    const { productId } = req.params;
    const currentIndex = products.findIndex((product) => product.id === productId);

    if(currentIndex === -1) {
        res.status(400).json({ error: 'Product does not exist' });
    } else {
        products.splice(currentIndex, 1);

        res.json({ productId });
    }
});

module.exports = router;
