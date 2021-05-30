/* eslint-disable no-undef */

const { chromium } = require('playwright');
const expect = require('expect');
jest.setTimeout(30 * 1000);
let browser;
let page;

const myLocators = require('./myLocators');
const test_data = require('./hw_tests_data');
const locator = new myLocators();

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

it('High menu novigation', async () => {
  
    await page.goto('https://selectel.ru/');

    //Раскрыть меню Решения
    await page.click(locator.tab2);

    //Выбрать Индивидуальные решения
    await page.click(locator.individualSolutions);

    //Выбрать раздел Дата-центр под ключ
    await page.click(locator.dataCenter);
    expect(await page.url()).toBe('https://selectel.ru/solutions/data-center/');
});


it('Subscribe to the newsletter', async () => {    
  
    await page.goto('https://selectel.ru/solutions/data-center/');

    //Подписаться на рассылку
    await page.click(locator.newsSubscribe);
    await page.waitForURL('https://selectel.ru/subscribe/');
    expect(await page.isVisible(locator.form)).toBeTruthy();

    //Заполнить форму
    await page.fill(locator.inputMail, test_data.input_word);

    //Поставить чекбокс
    await page.check(locator.checkbox);        
    expect(await page.isChecked(locator.checkbox)).toBeTruthy() 

    //Нажать Подписаться
    await page.click(locator.sendForm);
    expect(await page.isVisible(locator.successText)).toBeTruthy();
});


it('KB integration', async () => {
  
    await page.goto('https://selectel.ru/');
    expect(await page.isVisible(locator.kuber));  

    //Выбрать раздел Кластеры Kubernetes 
    await page.click(locator.tab1);
    await page.click(locator.kuber);
    expect(await page.url()).toBe('https://selectel.ru/services/cloud/kubernetes/');

    //Нажать Документация к API
    await page.click(locator.API);
    const pageEl = await page.$(locator.API);
    const className = await pageEl.getAttribute('class');
    expect(className).toContain('active');

    //Выбрать API Kubernetes 
    await page.click(locator.APIKubernetes);
    expect(await page.url()).toBe('https://developers.selectel.ru/docs/selectel-cloud-platform/kubernetes_api/');
    expect(await page.title()).toBe('Kubernetes • Документация к API');
});


it('Low menu novigation', async () => {
  
    await page.goto('https://selectel.ru/');

    //В нижнем меню выбираем Дата-центры
    await page.click(locator.dCenters);
    await page.waitForURL('https://selectel.ru/about/data-centers/');

    //Выбрать раздел У нас бывает жарко
    await page.click(locator.section2);
    expect(await page.isVisible(locator.h3)).toBeTruthy();

    //Таб Цветочная 2
    await page.click(locator.location);
    const pageElem = await page.$(locator.location);
    const className = await pageElem.getAttribute('class');
    expect(className).toContain('active');
    expect(await page.isVisible(locator.CV2)).toBeTruthy();

});


it('EN language check', async () => {
  
    await page.goto('https://selectel.ru/');

    //Переключиться на en локаль
    await page.click(locator.en);
    expect(await page.isVisible(locator.h2)).toBeTruthy();

    //Выбрать раздел DBaaS
    await page.click(locator.tab1);
    await page.click(locator.DBaaS);
    expect(await page.isVisible(locator.hDBaaS)).toBeTruthy();

    //Выбрать блок Cloud Servers
    await page.click(locator.cloudServers);
    await page.waitForURL('https://selectel.ru/en/services/cloud/');
    expect(await page.isVisible(locator.hCP)).toBeTruthy();
});