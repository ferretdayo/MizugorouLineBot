import replyMessage from './reply/index'
import simpleMessage from './messages/simpleMessage'
import { reply } from './utils'

export default (replyToken, message) => {
  let events_processed = []
  events_processed.push(replyMessage(replyToken, message))

  Promise.all(events_processed).then(
    (response) => {
      console.log(`${response.length} event(s) processed.`);
    }
  ).catch(e => {
    reply(replyToken, simpleMessage("内部的なエラーが発生しました．"))
  });
}
