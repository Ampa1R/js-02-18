const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();
const log = require('./logger');

app.use(express.static('./static'));
app.use(express.json());
app.use(cors());

app.get('/api/goods', (request, response) => {
    console.log('/goods route handler', request.ip);
    fs.readFile('./goods.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Read goods.json error!'. err);
            response.send('Read goods.json error!');
            return;
        }

        //const goods = JSON.parse(data);
        //console.log(goods);
        return response.send(data);

    });
});

app.get('/api/basket-goods', (request, response) => {
    console.log('/basket-goods route handler', request.ip);
    fs.readFile('./basket-goods.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Read basket-goods.json error!'. err);
            response.send('Read basket-goods.json error!');
            return;
        }

        const basket = JSON.parse(data);
        const total = basket.reduce(
            (accumulator, currentElement) => accumulator + (currentElement.price * currentElement.quantity), 0);

        return response.json({
            total,
            contents: basket,
        });

    });
});

app.post('/api/basket-goods', (request, response) => {
    console.log('/basket-goods POST route handler', request.ip);
    fs.readFile('./basket-goods.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Read basket-goods.json error!'. err);
            response.send('Read basket-goods.json error!');
            return;
        }

        const basket = JSON.parse(data);
        const item = request.body;
        console. log(request.body);
        //basket.push(item);
        
        /*const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id === item.id);
            if (itemIndex > -1) {
                basket[itemIndex].quantity += 1;
            } else {
                basket.push({ ...item, quantity: 1 });
            }*/
        
            log('ADD', item.id);

        fs.writeFile('./basket-goods.json', JSON.stringify(basket), (err) =>{
            if (err) {
                console.log('Write basket-goods.json error!'. err);
                response.json({
                    status: 0,
                    message: 'Write basket-goods.json error!',
                    error: err,
                });
                return;
            }
            response.json({status: 1});
        })

    });
});

app.delete('/api/basket-goods/:id', (request, response) => {

    console.log('/basket-goods POST route remove handler', request.ip);
    fs.readFile('./basket-goods.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Read basket-goods.json error!'. err);
            response.send('Read basket-goods.json error!');
            return;
        }

        const basket = JSON.parse(data);
        //const id = parseInt(req.params.id);
        let index = basket.findIndex((goodsItem) => goodsItem.id === request.body.id);
        //console. log(req.params);
        console.log("before delete");
        console.log(basket);

        console.log(`index = ${index}`);
        if (index >= 0)
            basket.splice(index, 1);
        console.log("after delete");
        console.log(basket);

        basket = basket.filter((goodsItem) => goodsItem.id !== parseInt(id));

        log('DELETE', id);
        
        const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id === item.id);
            if (itemIndex > -1) {
                basket[itemIndex].quantity += 1;
            } else {
                basket.push({ ...item, quantity: 1 });
            }
             

        fs.writeFile('./basket-goods.json', JSON.stringify(basket), (err) =>{
            if (err) {
                console.log('Write basket-goods.json error!'. err);
                response.json({
                    status: 0,
                    message: 'Write basket-goods.json error!',
                    error: err,
                });
                return;
            }
            response.json({ status: 1});
        })   
    });
});

app.listen(3000, () => {

    console.log('App, is running @ http://localhost:3000');

});
