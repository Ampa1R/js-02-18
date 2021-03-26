import express, { json } from 'express';
import { readFile } from 'fs';
const app = express();

app.use(express.static('../dist/')).use(json());
app.post('/api/catalog/elements/get', (req, res) => {
    readFile('../public/api/catalog/elements/get/all.json', 'utf8', (err, data) => {
        const catalog = JSON.parse(data).catalog;
        const requsted = req.body;
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
        });
        res.send(result);
        //setTimeout(() => res.send(result), 2000);
        
    });
});

app.listen(3000, () => {
    console.log('server is running on port http://localhost:3000/ !');
});