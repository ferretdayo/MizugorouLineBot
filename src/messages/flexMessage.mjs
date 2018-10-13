/**
 * 
 * @param altText PC版に表示するテキスト
 * @param itemList カルーセルに表示させるアイテムのリスト
 */
export const flexCarouselMessage = (altText, itemList) => {
  return {
    type: 'flex',
    altText: altText,
    contents: {
      type: 'carousel',
      contents: itemList
    }
  }
}