const  pow  = require('../script');

const division = pow.division
const multiplication = pow.multiplication
const addition = pow.addition
const subtraction = pow.subtraction
describe('Функция division', () => {
    it('при аргументах (2, 2) должна возвращать 1', () => {
        const res = division(2, 2);
        expect(res).toBe(1);
    });
   
    it('при аргументах (null, 3) должна возвращать null', () => {
        const res = division(null, 3);
        expect(res).toBeNull();
    });

    it('при аргументах (3, null) должна возвращать null', () => {
        const res = division(3, null);
        expect(res).toBeNull();
        expect(res).not.toBe(1);
    });

    it('при аргументах (3, string) должна возвращать undefined', () => {
        const res = division(3, "String");
        expect(res).toBeUndefined();
    });

    it('при аргументах (string, 3) должна возвращать undefined', () => {
        const res = division( "String", 5);
        expect(res).toBeUndefined();
    });

    it('при аргументах (undefined, 3) должна возвращать undefined', () => {
        const res = division( undefined, 3);
        expect(res).toBeUndefined();
    });
    
    it('при аргументах (3, undefined) должна возвращать undefined', () => {
        const res = division(3, undefined);
        expect(res).toBeUndefined();
    });
});

describe('Функция multiplication', () => {
    it('при аргументах (2, 2) должна возвращать 4', () => {
        const res = multiplication(2, 2);
        expect(res).toBe(4);
    });

    it('при аргументах (0, 2) должна возвращать 0', () => {
        const res = multiplication(0, 2);
        expect(res).toBe(0);
    });

    it('при аргументах (2, 0) должна возвращать 0', () => {
        const res = multiplication(2, 0);
        expect(res).toBe(0);
    });
   
    it('при аргументах (null, 3) должна возвращать null', () => {
        const res = multiplication(null, 3);
        expect(res).toBeNull();
    });

    it('при аргументах (3, null) должна возвращать null', () => {
        const res = multiplication(3, null);
        expect(res).toBeNull();
        expect(res).not.toBe(1);
    });

    it('при аргументах (3, string) должна возвращать undefined', () => {
        const res = multiplication(3, "String");
        expect(res).toBeUndefined();
    });

    it('при аргументах (string, 3) должна возвращать undefined', () => {
        const res = multiplication( "String", 5);
        expect(res).toBeUndefined();
    });

    it('при аргументах (undefined, 3) должна возвращать undefined', () => {
        const res = multiplication( undefined, 3);
        expect(res).toBeUndefined();
    });
    
    it('при аргументах (3, undefined) должна возвращать undefined', () => {
        const res = multiplication(3, undefined);
        expect(res).toBeUndefined();
    });
});



describe('Функция addition', () => {
    it('при аргументах (2, 2) должна возвращать 4', () => {
        const res = addition(2, 2);
        expect(res).toBe(4);
    });

    it('при аргументах (0, 2) должна возвращать 0', () => {
        const res = addition(0, 2);
        expect(res).toBe(2);
    });

    it('при аргументах (2, 0) должна возвращать 0', () => {
        const res = addition(2, 0);
        expect(res).toBe(2);
    });
   
    it('при аргументах (null, 3) должна возвращать null', () => {
        const res = addition(null, 3);
        expect(res).toBeNull();
    });

    it('при аргументах (3, null) должна возвращать null', () => {
        const res = addition(3, null);
        expect(res).toBeNull();
        expect(res).not.toBe(1);
    });

    it('при аргументах (3, string) должна возвращать undefined', () => {
        const res = addition(3, "String");
        expect(res).toBeUndefined();
    });

    it('при аргументах (string, 3) должна возвращать undefined', () => {
        const res = addition( "String", 5);
        expect(res).toBeUndefined();
    });

    it('при аргументах (undefined, 3) должна возвращать undefined', () => {
        const res = addition( undefined, 3);
        expect(res).toBeUndefined();
    });
    
    it('при аргументах (3, undefined) должна возвращать undefined', () => {
        const res = addition(3, undefined);
        expect(res).toBeUndefined();
    });
});



describe('Функция subtraction', () => {
    it('при аргументах (2, 2) должна возвращать 0', () => {
        const res = subtraction(2, 2);
        expect(res).toBe(0);
    });

    it('при аргументах (0, 2) должна возвращать 0', () => {
        const res = subtraction(0, 2);
        expect(res).toBe(-2);
    });

    it('при аргументах (2, 0) должна возвращать 0', () => {
        const res = subtraction(2, 0);
        expect(res).toBe(2);
    });
   
    it('при аргументах (null, 3) должна возвращать null', () => {
        const res = subtraction(null, 3);
        expect(res).toBeNull();
    });

    it('при аргументах (3, null) должна возвращать null', () => {
        const res = subtraction(3, null);
        expect(res).toBeNull();
        expect(res).not.toBe(1);
    });

    it('при аргументах (3, string) должна возвращать undefined', () => {
        const res = subtraction(3, "String");
        expect(res).toBeUndefined();
    });

    it('при аргументах (string, 3) должна возвращать undefined', () => {
        const res = subtraction( "String", 5);
        expect(res).toBeUndefined();
    });

    it('при аргументах (undefined, 3) должна возвращать undefined', () => {
        const res = subtraction( undefined, 3);
        expect(res).toBeUndefined();
    });
    
    it('при аргументах (3, undefined) должна возвращать undefined', () => {
        const res = subtraction(3, undefined);
        expect(res).toBeUndefined();
    });
});