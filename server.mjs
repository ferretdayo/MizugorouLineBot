'use strict';

import messageHandler from './src/messageHandler'
import express from 'express'
import line from '@line/bot-sdk'
import config from './src/config'
const PORT = process.env.PORT || 3000;

const app = express();
app.post('/webhook', line.middleware(config), (req, res) => {
  console.log(req.body.events);

  res.sendStatus(200);

  // イベントオブジェクトを順次処理。
  req.body.events.forEach((event) => {
    // この処理の対象をイベントタイプがメッセージで、かつ、テキストタイプだった場合に限定。
    if (event.type == "message" && event.message.type == "text"){
      messageHandler(event.replyToken, event.message.text)
    }
  });
});

app.listen(PORT);
console.log(`Server running at ${PORT}`);