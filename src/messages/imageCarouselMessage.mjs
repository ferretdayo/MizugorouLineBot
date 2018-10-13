/**
 * 
 * @param itemList カルーセルに表示させるアイテムのリスト
 */
export default (altText, itemList) => {
  return {
    type: "template",
    altText: altText,
    template: {
      type: "image_carousel",
      columns: itemList
    }
  }
}


// 例: itemList
// [
//   {
//     "imageUrl: "https://example.com/bot/images/item1.jpg",
//     "action: {
//       "type: "postback",
//       "label: "Buy",
//       "data: "action=buy&itemid=111"
//     }
//   },
//   {
//     "imageUrl: "https://example.com/bot/images/item3.jpg",
//     "action: {
//       "type: "uri",
//       "label: "View detail",
//       "uri: "http://example.com/page/222"
//     }
//   }
// ]