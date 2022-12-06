describe('e2e tests', () => {
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500/source/');
    })

    test('simple button test', async () => {
        let button = await page.$('#increment-button');
        await button.click();
        let clickCount = await page.$('#click-count');
        let clickCountText = await clickCount.getProperty('innerText');
        console.log('here');
        expect(await clickCountText.jsonValue()).toBe("1");
    });
});