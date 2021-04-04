const fs = require('fs')

fs.readFile('./data.json', 'utf-8',  (err, data) => {
    if (err) {
        console.log('Error!', err);
        return;
    }
    console.log(data);
});