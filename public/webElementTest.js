const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
    let driver = await new Builder().forBrowser('chrome') .build();
    try {
        await driver.get('https://www.naver.com/');
     
        let searchInput = await driver.findElement(By.id('query'));
        let keyword = '개발자';
        searchInput.sendKeys(keyword, Key.ENTER);
     
        await driver.wait(until.elementLocated(By.css('#header_wrap')), 10000);
        let resultElements = await driver.findElements(By.className('total_tit'));
        for (var i = 0; i < resultElements.length; i++) {
            console.log('- ' + await resultElements[i].getText())
        }
       
        if (resultElements.length > 0) {
            await resultElements[0].click();
        }
       
        try {
            await driver.wait(() => { return false; }, 4000);
        }
        catch (err) {
 
        }
    } finally {
        driver.quit();
    }
})();
