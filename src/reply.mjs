import client from './client'
import DrinkingParty from './const/DrinkingParty' 
import { flexImageCarouselBuilder } from './messages/builder/hotpepper'
import simpleMessage from './messages/simpleMessage'

import hotpepper from './service/hotpepper'

export default (replyToken, message) => {
  if (message.indexOf("/飲み会") >= 0) {
    message = toHalfWidth(message)
    // const party = message.match(/^\/飲み会\s+.*(\s+.*)*/g)
    const party = message.match(/^\/飲み会\s+.*/g)
    if (!party) {
      return reply(replyToken, simpleMessage(DrinkingParty.TEMPLATE_ERROR))
    }
    const keywordText = party[0].split(/\s+/)[1]
    const keyword = keywordText.match(/.+(,.*)*/g)
    // const moneyText = party[0].split(/\s+/)[2]
    // const money = moneyText.match(/[1-9]+[0-9]+/g)
    if (!keyword) {
      return reply(replyToken, simpleMessage(DrinkingParty.KEYWORD_ERROR + "\n" + DrinkingParty.TEMPLATE_ERROR))
    }
    // if (!money) {
    //   return reply(replyToken, simpleMessage(DrinkingParty.MONEY_ERROR + "\n" + DrinkingParty.TEMPLATE_ERROR))
    // }
    try {
      hotpepper.searchFoodShop(keyword[0])
      .then(data => {
        if (data.length > 0) {
          return reply(replyToken, flexImageCarouselBuilder(data))
        } else {
          return reply(replyToken, simpleMessage("お店が見つかりませんでした．．．"))
        }
      })
    } catch (error) {
      return reply(replyToken, simpleMessage("内部的なエラーが発生しました．"));
    }
  }
}

function reply(replyToken, replyMsg) {
  return client.replyMessage(replyToken, replyMsg)
}

function toHalfWidth(strVal){
  // 半角変換
  var halfVal = strVal.replace(/[！-～]/g,
    function( tmpStr ) {
      // 文字コードをシフト
      return String.fromCharCode( tmpStr.charCodeAt(0) - 0xFEE0 );
    }
  );
 
  // 文字コードシフトで対応できない文字の変換
  return halfVal.replace(/”/g, "\"")
    .replace(/’/g, "'")
    .replace(/‘/g, "`")
    .replace(/￥/g, "\\")
    .replace(/　/g, " ")
    .replace(/〜/g, "~");
}
