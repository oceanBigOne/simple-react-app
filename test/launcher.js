const puppeteer = require('puppeteer');
puppeteer.launch({headless: false}).then(async browser => {   const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'myscreenshot3000.png', fullPage: true });
    //await page.goto('http://localhost:3001');
    //await page.screenshot({ path: 'myscreenshot3001.png', fullPage: true });
    await browser.close();
});