import reply from './reply'

export default (replyToken, message) => {
  let events_processed = []
  events_processed.push(reply(replyToken, message))

  Promise.all(events_processed).then(
    (response) => {
      console.log(`${response.length} event(s) processed.`);
    }
  ).catch(e => console.log(e));
}
