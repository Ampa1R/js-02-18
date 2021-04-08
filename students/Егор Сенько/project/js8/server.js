const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('.'));

app.use(bodyParser.json());

app.get('/catalogData', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/cartData', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const cartItem = req.body;
        let index = -1;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product_name === cartItem.product_name) {
                index = i;
            }
        }

        if (index > -1) {
            cart[index].quantity++;
        } else {
            cartItem.quantity = 1;
            cart.push(cartItem);
        };

        fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                res.send('{"result": 0}');
            } else {
                res.send('{"result": 1}');
            }
        });
    });
});

app.delete('/removeFromCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const removingItem = req.body;

        let newCart = cart.filter((item) => {
            return item.product_name !== removingItem.product_name;
        });

        fs.writeFile('cart.json', JSON.stringify(newCart), (err) => {
            if (err) {
                res.send('{"result": 0}');
            } else {
                res.send('{"result": 1}');
            }
        });
    });
});

app.listen(3000, function() {
    console.log('server is running on port 3000!');
});