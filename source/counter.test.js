const fn = require("./counter.js");

test('Increment Test', () => {
    fn.click();
    expect(fn.clicks.total).toBe(1);
});

test('2 Increment Test', () => {
    fn.click();
    fn.click();
    expect(fn.clicks.total).toBe(3);
});

test('Reset Test', () => {
    fn.resetCounter();
    expect(fn.clicks.total).toBe(0);
});