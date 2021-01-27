const express = require('express');
var router = express.Router();

const orders = [];

router.get('/all', (req, res) => {
    const { page, size } = req.query;
    const data = {};
    let ordersToReturn = [];

    if((page && size) || size) {
        let currentPage = 1;
        let currentSize = 0;
        const pageInt = parseInt(page) || 1;
        const sizeInt = parseInt(size) || orders.length;
        data.page = pageInt;

        orders.forEach((order) => {

            if(currentSize === sizeInt) {
                currentPage++;
                currentSize = 0;
            }

            if(currentPage === pageInt) {
                ordersToReturn.push(order);
            } else if(currentPage > pageInt) {
                data.nextPage = true;
            }

            currentSize++;
        });

        data.totalPages = currentPage;
    } else {
        ordersToReturn = orders;
    }

    data.ordersCount = ordersToReturn.length;
    data.orders = ordersToReturn;

    res.json(data);
}) 

router.post('/', (req, res) => {
    const { order } = req.body;

    orders.push({
        ...order,
        orderId: +new Date()
    });

    res.json({ status: 'Order has been added' })
});

module.exports = router;
