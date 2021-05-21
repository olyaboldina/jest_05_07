// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('salary', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('salary', async function() {
    await driver.get("https://dou.ua/")
    await driver.manage().window().setRect(1440, 900)
    await driver.findElement(By.css(".b-head li:nth-child(5) > a")).click()
    {
      const dropdown = await driver.findElement(By.name("city"))
      await dropdown.findElement(By.xpath("//option[. = 'Одесса']")).click()
    }
    await driver.findElement(By.css(".salarydec-field:nth-child(2) option:nth-child(16)")).click()
    {
      const dropdown = await driver.findElement(By.name("title"))
      await dropdown.findElement(By.xpath("//option[. = 'Junior QA engineer']")).click()
    }
    await driver.findElement(By.css(".qa:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.css(".ui-state-active"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".ui-state-active"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".ui-state-active"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".ui-state-focus")).click()
    await driver.close()
  })
})