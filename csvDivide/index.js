// const csv = require('csv')
const fs = require('fs')
try {
  const data = fs.readFileSync('../temp/origin/t_classical_cases_origin_202302281524.csv', 'UTF-8')
  const lines = data.split(/\n/)
  const header = lines[0]
  
  let eachFileDataArr = [header]
  let count = 0
  eachFileDataArr.push()
  for(let i = 1; i < lines.length; i++) {
    eachFileDataArr.push(lines[i])
    if(eachFileDataArr.length === 1000) {
      fs.writeFileSync(`./output/${count++}.csv`, eachFileDataArr.join('\n'))
      eachFileDataArr = [header]
    }
  }
  if(eachFileDataArr.length > 0) {
    fs.writeFileSync(`./output/${count++}.csv`, eachFileDataArr.join('\n'))
  }
}catch(err) {
  console.error(err)
}