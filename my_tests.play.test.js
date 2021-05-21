//Homework_5

const { chromium } = require('playwright');
const log4js = require('log4js');
const expect = require('expect');
jest.setTimeout(30 * 1000);
let browser;
let page;

const mySelectors = require('./mySelectors');
const test_data_my = require('./my_tests_data');
const logger = log4js.getLogger();

//log level
//logger.level = 'debug';
log.level = process.env.LOG_LEVEL || 'debug';

const selector = new mySelectors();

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

it('Knowledge base search', async () => {
  
  await page.goto('https://kb.selectel.ru/');

  //В поисковую строку ввести текст Пополнение баланса
  await page.fill(selector.input, test_data_my.input_word);
  await page.click(selector.searchIcon);
  expect(await page.isVisible(selector.searchResults)).toBeTruthy();

  //В результатах поиска выбираем Пополнение баланса
  await page.click(selector.articleBalance);
  expect(await page.title()).toBe('Пополнение баланса | База знаний Selectel');

  //В левом боковом меню выбираем Переводы между балансами
  await page.click(selector.articleTransfer);
  expect(await page.url()).toBe('https://kb.selectel.ru/docs/control-panel-actions/billing/transfers_between_balances/');
  
  const pageEl = await page.$(selector.articleTransfer);
  const classNames = await pageEl.getAttribute('class');
  expect(classNames).toContain('active');
  logger.debug('verification success');
});


// it('API documentation search', async () => {
  
//   await page.goto('https://kb.selectel.ru/');

//   //Переходим в раздел Документация API
//   await page.click(selector.API);
//   expect(await page.url()).toBe('https://developers.selectel.ru/');

//   //На дашборде выбираем Облачные базы данных
//   await page.click(selector.DBaasS);

//   //В левом боковом меню выбираем Хранилища данных
//   await page.click(selector.dataStore);   
//   expect(await page.isVisible(selector.dataStore).active);               

//   //Нажимаем на DELETE запрос
//   await page.click(selector.dRequest);
  
//   const pageEl3 = await page.$(selector.dRequest);
//   const classNames2 = await pageEl3.getAttribute('class');
//   expect(classNames2).toContain('is-open');
// });


// it('Page surfing', async () => {
  
//   await page.goto('https://kb.selectel.ru/');
//   expect(await page.title()).toBe('База знаний Selectel | База знаний Selectel');

//   //На дашборде выбираем Серверы
//   await page.click(selector.servers);

//   //Нажимаем Начало работы
//   await page.click(selector.startWork);
//   expect(await page.url()).toBe('https://kb.selectel.ru/docs/servers-and-infrastructure/dedicated-servers/getting-started/');

//   //Выбираем Сервер фиксированной конфигурации
//   await page.click(selector.fix);

//   //В правом боковом меню выбираем После заказа
//   await page.click(selector.afterOrder);
  
//   //Переходим по ссылке Оплата выделенных серверов
//   await page.click(selector.payment);
//   expect (await page.isVisible(selector.h1));
//  });


// it('Knowledge base search, another case', async () => {
  
//     await page.goto('https://kb.selectel.ru/');
  
//     //На дашборде выбираем Аккаунт
//     await page.click(selector.accaunt);
//     expect (await page.isVisible(selector.input));

//     //В поисковую строку ввести слово "реферал"
//     await page.fill(selector.input, test_data_my.input_word2);
//     await page.click(selector.searchIcon);
//     expect (await page.isVisible(selector.searchResults)).toBeTruthy();

//     //В результатах поиска выбираем Реферальная программа
//     await page.click(selector.articleReferralProgram);
//     expect(await page.title()).toBe('Реферальная программа | База знаний Selectel');
//   });