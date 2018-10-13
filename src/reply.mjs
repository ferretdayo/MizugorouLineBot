import client from './client'
import DrinkingParty from './const/DrinkingParty' 
import imageCarouselMessage from './messages/imageCarouselMessage'
import simpleMessage from './messages/simpleMessage'

import hotpepper from './service/hotpepper'

export default (replyToken, message) => {
  if (message.indexOf("/飲み会") >= 0) {
    const party = message.match(/^\/飲み会\s+.*(\s+.*)*/g)
    if (!party) {
      return reply(replyToken, simpleMessage(DrinkingParty.TEMPLATE_ERROR))
    }
    const keywordText = party[0].split(/\s+/)[1]
    const keywordList = keywordText.match(/.+(,.*)*/g)
    const moneyText = party[0].split(/\s+/)[2]
    const money = moneyText.match(/[1-9]+[0-9]+/g)
    if (!keywordList) {
      return reply(replyToken, simpleMessage(DrinkingParty.KEYWORD_ERROR + "\n" + DrinkingParty.TEMPLATE_ERROR))
    }
    if (!money) {
      return reply(replyToken, simpleMessage(DrinkingParty.MONEY_ERROR + "\n" + DrinkingParty.TEMPLATE_ERROR))
    }
    const keyword = keywordList.join(' ')
    hotpepper.searchFoodShop(keyword)
    .then(data => {
      return reply(replyToken, imageCarouselMessage("飲み会の候補を出しています．スマートフォンから見てください．", data))
    })
  }
}

function reply(replyToken, replyMsg) {
  return client.replyMessage(replyToken, replyMsg)
}
