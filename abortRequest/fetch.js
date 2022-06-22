const controller = new AbortController()
const url = 'http://service-node/api/ePrescription'
const data = {"doctorId":"rqwcweqveb52e","solutionCode":"DJS006141010964141","patientDocId":null,"patientName":"北极光","patientGender":1,"patientAge":168,"tags":"头疼","dosage":1,"remark":"饭后一小时服","solutionStatus":4,"solutionType":16,"solutionOperationType":2,"price":0,"attributes":null,"recommendedPharmacy":"STORE_44494","recommendedStoreName":"南京－君和堂","recommendedStoreAvatar":"https://image.dajiazhongyi.com/upload/drugstore/avatar/44494.png","createTime":1652193842000,"isDeleted":0,"isDeprecated":0,"dayDosage":2,"dayNum":1,"corelationCode":"DJC006141010313695","viewAfterOrder":0,"expire":true,"treatmentFee":40800,"takeType":null,"diseases":"头疼","symptoms":"","specification":0,"packTypeId":2,"packTypeName":"干切片袋装","solutionSubTypeId":null,"solutionSubTypeName":null,"weightPerPack":15,"powderSizeId":null,"powderSizeName":null,"usageType":4,"boilPreference":null,"boilSpec":null,"isDefaultBoilSpec":null,"protocolId":null,"protocolFee":0,"protocolName":null,"protocolDosage":null,"isDiabetes":false,"medicalRecord":{"record":null,"images":[],"phone":null},"note":"","solutionItems":[{"itemId":86,"itemName":"桂枝","itemType":0,"quantity":54000,"medicineHelp":"","unit":"g","isInt":0,"isSigned":1,"unit2g":null},{"itemId":146,"itemName":"生白芍","itemType":0,"quantity":54000,"medicineHelp":"","unit":"g","isInt":0,"isSigned":0,"unit2g":null},{"itemId":230,"itemName":"炙甘草","itemType":0,"quantity":36000,"medicineHelp":"","unit":"g","isInt":0,"isSigned":0,"unit2g":null},{"itemId":591,"itemName":"生姜","itemType":0,"quantity":54000,"medicineHelp":"","unit":"g","isInt":0,"isSigned":0,"unit2g":null},{"itemId":44,"itemName":"大枣","itemType":0,"quantity":54000,"medicineHelp":"","unit":"g","isInt":0,"isSigned":0,"unit2g":null},{"itemId":1543,"itemName":"东阿阿胶(粉)","itemType":0,"quantity":210000,"medicineHelp":"","unit":"g","isInt":0,"isSigned":0,"unit2g":null}],"auxiliarySolutionItems":[{"itemId":1,"itemName":"饴糖","itemType":3,"quantity":-1,"medicineHelp":"","unit":"g","isInt":0,"isSigned":0,"unit2g":null}],"solidSolutionItems":[{"itemId":357,"itemName":"黑芝麻","itemType":5,"quantity":250000,"medicineHelp":null,"unit":"g","isInt":0,"isSigned":null,"unit2g":null},{"itemId":1332,"itemName":"核桃仁","itemType":5,"quantity":250000,"medicineHelp":null,"unit":"g","isInt":0,"isSigned":null,"unit2g":null}],"selfDrug":[591,1022,779,1117,1118,1119,1120,1121,1122,1123,1124,1234,1242,1243,1548,1549,1684,1985,549,1,258],"shareKey":"cmpjN2ZxYzJEZ1FOMGF1SE80NVdLZXdtdk1zYTdnYUVGUmdQdzcwUzA4cW9zT0FCWUFUellmSHZtVUZldWtjPQ==","expectedUseDayLow":26,"expectedUseDayUp":26,"signatureImgUrl":"https://huatuce-dev.oss-cn-shanghai.aliyuncs.com/ePrescription/1654585821765.jpg"}

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  signal: controller.signal,
}).then(res => res.json())
.then(json => console.log(json))

setTimeout(() => {
  controller.abort()
}, 500)