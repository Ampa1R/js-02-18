import express, { json } from 'express';
import { readFile, readFileSync, writeFileSync } from 'fs';

function mergeCatalog(requsted, catalog) {
    let result = {
        "status": 200,
        "catalog": {}
    }
    requsted.forEach(function (item) {
        let elem = catalog[item.id] !== undefined ? catalog[item.id] : undefined;
        let target = result.catalog[item.id] !== undefined ? result.catalog[item.id] : undefined;
        if (target === undefined) {
            result.catalog[item.id] = { type: {} };
            target = result.catalog[item.id];
        } else if (target.type[item.type] === undefined) {
            target.type[item.type] = {}
        }
        if (elem !== undefined && elem.type[item.type] !== undefined) {
            target.name = elem.name;
            target.type[item.type] = {
                img: elem.type[item.type].img,
                price: elem.type[item.type].price,
                star: elem.type[item.type].star,
                color: elem.type[item.type].color,
                size: elem.type[item.type].size,
            };
        } else {
            result.status = 210;
            target.name = 'Not found on server';
            target.type[item.type] = {
                img: '',
                price: 0,
                star: 0,
                color: 'Not found on server',
                size: 'Not found on server',
            }
        }
    })
    return result;
}
function randomizeCatalog(amount, catalog, nParts = 4) {
    let parts = [], rand = [], result = [], cat = Object.keys(catalog);
    for (let i = 0; i < nParts; i++) {
        parts.push(cat.slice(i * cat.length / nParts, (i + 1) * cat.length / nParts))
    }
    for (let i = 0; i < nParts; i++) {
        for (let j = 0; j < amount / nParts; j++) {
            rand = parts[i].splice(Math.floor(Math.random() * parts[i].length), 1);
            let type = Object.keys(catalog[rand[0]].type);
            type = type.splice(Math.floor(Math.random() * type.length), 1);
            result.push({ id: rand[0], type: type[0] });
        }
    }
    return result;
}
function initCart(itemsCount, itemQuantity) {
    const catalog = JSON.parse(readFileSync('../public/api/catalog/elements/get/all.json', 'utf8')).catalog;
    let cart = randomizeCatalog(itemsCount, catalog)
    cart.forEach(function (item) {
        item['quantity'] = (Math.floor(Math.random() * itemQuantity) + 1);
    });
    return cart;

}

function CartInc(cart, item) {
    let index = cart.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
    if (index !== -1) {
        cart[index].quantity++;
        return true;
    } else {
        return false;
    }
}
function CartDec(cart, item) {
    let index = cart.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
    if (index !== -1) {
        if (1 < cart[index].quantity) {
            cart[index].quantity--;
        } else {
            CartDel(cart, index);
        }
        return true;
    } else {
        return false;
    }
}
function CartDel(cart, item) {
    let index = cart.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
    if (index !== -1) {
        cart.splice(index, 1);
        return true;
    } else {
        return false;
    }
}
function CartAdd(cart, item) {
    if (!CartInc(cart, item)) {
        cart.push({
            "id": item.id,
            "type": item.type,
            "quantity": 1
        });
    }
    return true;
}
function CartSet(cart, item) {
    let index = cart.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
    if (index !== -1) {
        if (item.quantity > 0) {
            cart[index].quantity = item.quantity;
        } else {
            CartDel(cart, index);
        }
        return true;
    } else {
        return false;
    }
}
function statCart(action, item) {
    const stat = JSON.parse(readFileSync('../dist/api/cart/stats.json', 'utf8'));
    stat.push({ "action": action, "date": Date.now(), "item": item });
    writeFileSync('../dist/api/cart/stats.json', JSON.stringify(stat));
}
const app = express();
writeFileSync('../dist/api/cart/store.json', JSON.stringify({
    "status": 200,
    "cart": initCart(3, 4)
}));
writeFileSync('../dist/api/cart/stats.json', JSON.stringify([]));
app.use(express.static('../dist/')).use(json());
app.post('/api/catalog/elements/get', (req, res) => {
    readFile('../public/api/catalog/elements/get/all.json', 'utf8', (err, data) => {
        const catalog = JSON.parse(data).catalog;
        const requsted = req.body;
        res.send(mergeCatalog(requsted, catalog));
    });
});
app.get('/api/catalog/displayed/get/:amount', (req, res) => {
    readFile('../public/api/catalog/elements/get/all.json', 'utf8', (err, data) => {
        const catalog = JSON.parse(data).catalog;
        res.send({
            "status": 200,
            "displayed": randomizeCatalog(req.params.amount, catalog)
        });
    });
});

app.get('/api/cart/get', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        statCart("read cart", "");
        res.send(data);
    });
});

app.get('/api/cart/item/add/:id/:type', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data).cart;
        if (CartAdd(cart, { "id": req.params.id, "type": req.params.type })) {
            writeFileSync('../dist/api/cart/store.json', JSON.stringify({
                "status": 200,
                "cart": cart
            }));
            statCart("add item", { "id": req.params.id, "type": req.params.type });
            res.send({ "status": 200, "cart": cart });
        } else {
            res.send({ "status": 406, "cart": cart });
        }
    });
});

app.get('/api/cart/item/inc/:id/:type', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data).cart;
        if (CartInc(cart, { "id": req.params.id, "type": req.params.type })) {
            writeFileSync('../dist/api/cart/store.json', JSON.stringify({
                "status": 200,
                "cart": cart
            }));
            statCart("inc item", { "id": req.params.id, "type": req.params.type });
            res.send({ "status": 200, "cart": cart });
        } else {
            res.send({ "status": 406, "cart": cart });
        }
    });
});

app.get('/api/cart/item/dec/:id/:type', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data).cart;
        if (CartDec(cart, { "id": req.params.id, "type": req.params.type })) {
            writeFileSync('../dist/api/cart/store.json', JSON.stringify({
                "status": 200,
                "cart": cart
            }));
            statCart("dec item", { "id": req.params.id, "type": req.params.type });
            res.send({ "status": 200, "cart": cart });
        } else {
            res.send({ "status": 406, "cart": cart });
        }
    });
});

app.get('/api/cart/item/del/:id/:type', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data).cart;
        if (CartDel(cart, { "id": req.params.id, "type": req.params.type })) {
            writeFileSync('../dist/api/cart/store.json', JSON.stringify({
                "status": 200,
                "cart": cart
            }));
            statCart("del item", { "id": req.params.id, "type": req.params.type });
            res.send({ "status": 200, "cart": cart });
        } else {
            res.send({ "status": 406, "cart": cart });
        }
    });
});

app.get('/api/cart/item/set/:id/:type/:quantity', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data).cart;
        if (CartSet(cart, { "id": req.params.id, "type": req.params.type, "quantity": req.params.quantity })) {
            writeFileSync('../dist/api/cart/store.json', JSON.stringify({
                "status": 200,
                "cart": cart
            }));
            statCart("set item", { "id": req.params.id, "type": req.params.type });
            res.send({ "status": 200, "cart": cart });
        } else {
            res.send({ "status": 406, "cart": cart });
        }
    });
});
app.get('/api/cart/clean', (req, res) => {
    readFile('../dist/api/cart/store.json', 'utf8', (err, data) => {
        writeFileSync('../dist/api/cart/store.json', JSON.stringify({
            "status": 200,
            "cart": []
        }));
        statCart("clean cart", "");
        res.send({ "status": 200, "cart": [] });
    });
});
app.listen(3000, () => {
    console.log('server is running on port http://localhost:3000/ !');
});