const division = (x, y) => {
    if (x === null || y === null) {
        return null;
    }
   
    if (typeof x === 'string' || typeof y === 'string') {
        return undefined;
    }
    
    if ( x === undefined ||  y === undefined) {
        return undefined;
    }
    
    return x / y;
};

const multiplication = (x, y) => {
    if (x === null || y === null) {
        return null;
    }
   
    if (typeof x === 'string' || typeof y === 'string') {
        return undefined;
    }
    
    if ( x === undefined ||  y === undefined) {
        return undefined;
    }
    
    return x * y;
};


const addition = (x, y) => {
    if (x === null || y === null) {
        return null;
    }
   
    if (typeof x === 'string' || typeof y === 'string') {
        return undefined;
    }
    
    if ( x === undefined ||  y === undefined) {
        return undefined;
    }
    
    return x + y;
};

const subtraction = (x, y) => {
    if (x === null || y === null) {
        return null;
    }
   
    if (typeof x === 'string' || typeof y === 'string') {
        return undefined;
    }
    
    if ( x === undefined ||  y === undefined) {
        return undefined;
    }
    
    return x - y;
};
//console.log (division("f",1))

console.log (division(undefined,1))

module.exports = { division, multiplication, addition, subtraction };