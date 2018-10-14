import client from './client'

export const reply = (replyToken, replyMsg) => {
  return client.replyMessage(replyToken, replyMsg)
}

export const toHalfWidth = (strVal) => {
  var halfVal = strVal.replace(/[！-～]/g,
    ( tmpStr ) => {
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