// 云函数入口文件
const cloud = require('wx-server-sdk')
const cryptojs = require('crypto-js')
const rp = require('request-promise')
cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const end = process.env.end
  //取下name 和money
  var name = event.name
  var money = event.money

  const appid = process.env.appid
  const openid = wxContext.OPENID
  const body = name
  const mch_id = process.env.mchid
  const total_fee = money * 100
  const notify_url = "*****"
  const spbill_create_ip = "192.168.1.1"
  const nonce_str = Math.random().toString(36).substr(2, 15)
  const timeStamp = parseInt(Date.now() / 1000) + ''
  const out_trade_no = 'G_' + timeStamp

  var formData = "<xml>"
  formData += "<appid>" + appid + "</appid>"
  formData += "<body>" + body + "</body>"
  formData += "<mch_id>" + mch_id + "</mch_id>"
  formData += "<nonce_str>" + nonce_str + "</nonce_str>"
  formData += "<notify_url>" + notify_url + "</notify_url>"
  formData += "<openid>" + openid + "</openid>"
  formData += "<out_trade_no>" + out_trade_no + "</out_trade_no>"
  formData += "<spbill_create_ip>" + spbill_create_ip + "</spbill_create_ip>"
  formData += "<total_fee>" + total_fee + "</total_fee>"
  formData += "<trade_type>JSAPI</trade_type>"
  formData += "<sign>" + paysign({ appid, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee, trade_type: 'JSAPI' }) + "</sign>"
  formData += "</xml>"
  let res = await rp({ url: "https://api.mch.weixin.qq.com/pay/unifiedorder", method: 'POST', body: formData })
  let xml = res.toString("utf-8")
  if (xml.indexOf('prepay_id') < 0) return
  let prepay_id = xml.split("<prepay_id>")[1].split("</prepay_id>")[0].split('[')[2].split(']')[0]
  let paySign = paysign({ appId: appid, nonceStr: nonce_str, package: ('prepay_id=' + prepay_id), signType: 'MD5', timeStamp: timeStamp })
  return { appid, nonce_str, timeStamp, prepay_id, paySign, trade_no: out_trade_no}

  function paysign({ ...args }) {
    let sa = []
    for (let k in args) sa.push(k + '=' + args[k])
    sa.push('key=' + process.env.mchkey)
    return cryptojs.MD5(sa.join('&')).toString().toUpperCase()
  }
}