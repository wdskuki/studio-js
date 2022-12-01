const puppeteer = require('puppeteer')
const fs = require('fs')
const xlsx = require('node-xlsx').default;

const KeyMap = new Map()
KeyMap.set('flavors', null)
KeyMap.set('natures', null)
KeyMap.set('picture', null)
KeyMap.set('effects', null)

function validValue(value) {
  if (!value) return false
  return !!(value.trim())
}

function formatExcel() {
  const xlsxData = xlsx.parse('./input.xlsx')
  const list = xlsxData[0].data
  const arr = []
  const header = list[0]
  for(let i = 0; i < header.length; i++) {
    switch(header[i]) {
      case 'flavors':
      case 'natures':
      case 'picture':
      case 'effects':
        KeyMap.set(header[i], i)
        break
    }
  }
  for(let i = 1; i < list.length; i++) {
    const item = list[i]
    arr.push({
      flavorList: validValue(item[KeyMap.get('flavors')]) ? item[KeyMap.get('flavors')].split('/') : [],
      natureList: validValue(item[KeyMap.get('natures')]) ? [item[KeyMap.get('natures')]] : [],
      picture: item[KeyMap.get('picture')],
      effects: item[KeyMap.get('effects')] || ''
    })
  }
  console.log(arr)
  return arr
  // const file = fs.readFileSync('./input.xlsx')
  // const reader = new FileReader();
  // reader.readAsArrayBuffer(new Blob([file]));
  // reader.onload = (e) => {
  //   const data = e.target.result;
  //   const workbook = read(data, { type: "array" });
  //   const firstSheetName = workbook.SheetNames[0];
  //   const worksheet = workbook.Sheets[firstSheetName];
  //   const headers = getHeaderRow(worksheet).filter(
  //     (item) => !item.includes("UNKNOWN")
  //   );
  //   let tempList = utils.sheet_to_json(worksheet);
  //   tempList = tempList.map(item => {
  //     item.flavorList = validValue(item.flavors) ? item.flavors.split('/') : []
  //     item.natureList = validValue(item.natures) ? [item.natures] : []
  //     item.picture = item.picture
  //     item.effects = item.effects || ''
  //     return item
  //   })
  //   result.list = tempList;
  // };
}

formatExcel()
// (async () => {
//     let start = Date.now()
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.emulate(puppeteer.devices['iPhone X']);// 使用iphonex模式来进行高分屏截图
//     await page.goto(`file://${process.cwd()}/tmp.html`);
//     await page.screenshot({
//         path: `./jd-${1}.png`,// 注意：png清晰度远胜于jpg
//         clip: {x: 0, y: 0, height: 100, width: 100},
//     });
//     console.log(Date.now() - start)
//     await browser.close();
// })();