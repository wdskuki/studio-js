// const hmacsha1 = require('hmacsha1')
const utf8 = require('utf8')
// const cryptoJS = require('crypto-js')
const hmacsha1 = require('crypto-js/hmac-sha1')
const Base64 = require('js-base64')
// import { encode } from 'js-base64'

function getSignature(
  timestamp,
  method,
  path,
  appId,
  data,
  keychain) 
{
  const argsArr = []
  for(let key in data) {
    argsArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  }
  argsArr.push(`request_app_id=${appId}`)
  argsArr.push(`request_timestamp=${timestamp}`)
  argsArr.sort();
  const base_str = encodeURIComponent((method || '').toUpperCase()) + '&' + encodeURIComponent(path) + '&' + encodeURIComponent(argsArr.join('&'));
  console.log("base_str: ", (base_str))
  const sign_key = encodeURIComponent(appId) + '&' + encodeURIComponent(keychain)
  console.log("sign_key: ", (sign_key))
  // hmacsha1( )
  return Base64.encode(hmacsha1(base_str, sign_key).toString())
}


// GET&/api/classical2/medicines/list&effects=&page=0&request_app_id=DJJKMiniApp&request_timestamp=1677906330831&size=20
const timestamp = 1677906330831

const method = "GET"
const path = "/api/classical2/medicines/list"
const appId = "DJJKMiniApp"
const keyChain = "aPzglOShfT1OKtNF3kB758yh2ITRaIbf"
// const para = "meridianIds=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
const data = {
  effects: '',
  page: 0,
  size: 20,
}
const ret = getSignature(timestamp,method,path,appId,data,keyChain)

console.log(ret)

