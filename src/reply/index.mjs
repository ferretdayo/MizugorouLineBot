import hotpepperReply from './hotpepper'

export default (replyToken, message) => {
  if (message.indexOf("/飲み会") >= 0) {
    return hotpepperReply(replyToken, message)
  }
}
