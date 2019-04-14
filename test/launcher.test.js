const puppeteer = require('puppeteer');

test('First Test', async () =>{
    let browser = await puppeteer.launch({headless: true});
    let page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('http://localhost:3000');

    await page.waitForSelector(".btn-success");
    const html= await page.$eval('.btn-success', element => element.innerHTML);
    expect(html).toBe("BUTTON");
    browser.close();

},16000);

