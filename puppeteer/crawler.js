const puppeteer = require('puppeteer')
const fs = require('fs');
const URL = 'http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2021/index.html';

const oversea = [
  { "code": "90", "name": "香港特别行政区" },
  { "code": "12", "name": "澳门特别行政区" },
  { "code": "81", "name": "台湾省" },
  { "code": "000000", "name": "海外国家" },
]

const resultArray = [];

/**
const node = {
  code: null,
  name: null,
  sub: [],
}
*/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await enter(page, URL);
  await browser.close();

  oversea.forEach(item => resultArray.push(item))

  fs.writeFile("address.json", JSON.stringify(resultArray), 'utf8', function(err) {
    if(err) {
      return console.error('An error occured while writing JSON Object to File');
    }
    console.log('JSON file has been saved.')
  })
})();

async function enter(page, href) {
  await page.goto(href);
  const provinceList = await page.$$eval('.provincetr a', list => list.map(item => {
    const code = item.href.split('/').pop().split('.')[0];
    const name = item.innerText.trim();
    return {code, name, href: item.href};
  }));
  
  provinceList.forEach(item => {
    resultArray.push({
      code: item.code + '0000',
      name: item.name,
      sub: [],
    })
  })

  for(let i = 0; i < provinceList.length ; i++) {
    await enterEachProvince(page, provinceList[i].href, resultArray[i])
  }
}

async function enterEachProvince(page, href, provinceData) {
  console.log(provinceData)
  await page.goto(href);
  const cityList = await page.$$eval('.citytr a', list => list.filter((_, index) => index % 2 == 1).map(item => {
    const code = item.href.split('/').pop().split('.')[0];
    const name = item.innerText.trim();
    return {code, name, href: item.href};
  }))
  
  cityList.forEach(item => {
    provinceData.sub.push({
      code: item.code + '00',
      name: item.name,
      sub: [],
    })
  })

  for(let i = 0; i < cityList.length ; i++) {
    await enterEachCity(page, cityList[i].href, provinceData.sub[i])
  }
}

async function enterEachCity(page, href, cityData) {
  console.log(cityData)
  await page.goto(href);
  const districtList = await page.$$eval('.countytr a', list => list.filter((_, index) => index % 2 == 1).map(item => {
    const code = item.href.split('/').pop().split('.')[0];
    const name = item.innerText.trim();
    return {code, name, href: item.href};
  }))
  
  districtList.forEach(item => {
    cityData.sub.push({
      code: item.code,
      name: item.name,
    })
  })
  for(let i = 0; i < cityData.sub.length; i++) {
    console.log(cityData.sub[i])
  }
}