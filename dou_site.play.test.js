const { chromium } = require('playwright');
const log4js = require('log4js');
const expect = require('expect');
let browser;
let page;

const mainPage = require('./mainPage');
const test_data = require('./test_data');
const logger = log4js.getLogger();
//log level
logger.level = 'debug';

const mainpage = new mainPage();

beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

logger.debug('start verification');

it ('Open the main of dou site', async () => {
    await page.goto('https://dou.ua/');
    expect(await page.title()).toBe('Сообщество программистов | DOU');
    expect(await page.isVisible(mainpage.input));
    //Click text=Календарь
    await page.click('text=Календарь');
    expect(await page.url()).toBe('https://dou.ua/calendar/');
    //filling the data into search
    // await page.fill(mainpage.input, test_data.test_data_dou);
    // await page.press(mainpage.input, 'Enter');
    // expect(await page.url()).toBe('https://dou.ua/search/?q=javascript');
    logger.debug('verification success');
})



