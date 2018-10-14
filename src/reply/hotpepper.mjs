import DrinkingParty from '../const/DrinkingParty' 
import { flexImageCarouselBuilder } from '../messages/builder/hotpepper'
import simpleMessage from '../messages/simpleMessage'
import { reply, toHalfWidth } from '../utils'

import hotpepper from '../service/hotpepper'

export default (replyToken, message) => {
  message = toHalfWidth(message)
  // 、のほうがスマホからだと打ちやすいので，それも許容
  message = message.replace('、', ',')
  const party = message.match(/^\/飲み会\s+.*/g)
  if (!party) {
    return reply(replyToken, simpleMessage(DrinkingParty.TEMPLATE_ERROR))
  }
  const keywordText = party[0].replace('/飲み会', '').trim().replace(/\s+/g, ",")
  const keyword = keywordText.match(/.+(,.*)*/g)
  if (!keyword) {
    return reply(replyToken, simpleMessage(DrinkingParty.KEYWORD_ERROR + "\n" + DrinkingParty.TEMPLATE_ERROR))
  }

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