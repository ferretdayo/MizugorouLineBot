'use strict';

require('dotenv').config();
const express = require('express');
const line = require('@line/bot-sdk');
const PORT = process.env.PORT || 3000;

const config = {
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};

const app = express();
const client = new line.Client(config);

app.post('/webhook', line.middleware(config), (req, res) => { 
  console.log(config);
  console.log(req.body.events);
  res.sendStatus(200);
  // すべてのイベント処理のプロミスを格納する配列。
  let events_processed = [];

  // イベントオブジェクトを順次処理。
  req.body.events.forEach((event) => {
    // この処理の対象をイベントタイプがメッセージで、かつ、テキストタイプだった場合に限定。
    if (event.type == "message" && event.message.type == "text"){
      // ユーザーからのテキストメッセージが「こんにちは」だった場合のみ反応。
      if (event.message.text == "こんにちは"){
        // replyMessage()で返信し、そのプロミスをevents_processedに追加。
        events_processed.push(client.replyMessage(event.replyToken, {
          type: "text",
          text: "これはこれは"
        }));
      }
    }
  });
  console.log("events_processed: ", events_processed)
  // すべてのイベント処理が終了したら何個のイベントが処理されたか出力。
  Promise.all(events_processed).then(
    (response) => {
      console.log(`${response.length} event(s) processed.`);
    }
  );
});


app.listen(PORT);
console.log(`Server running at ${PORT}`);