import { bubbleComponentForHotpepper } from '../components/bubbleMessage'
import { flexCarouselMessage } from '../flexMessage'

export const flexImageCarouselBuilder = (shopList) => {
  const bubbleList = shopList.map(value => {
    let shop = {
      imagePath: value.photo.mobile.l || '',
      targetUrl: value.urls.pc || '',
      title: value.name || '',
      place: value.address || '',
      shopOpenInfo: value.open || '',
      budget: value.budget.name || '',
      genre: value.genre.name || '',
      couponUrl: value.coupon_urls.sp || ''
    }
    return bubbleComponentForHotpepper(shop)
  })
  return flexCarouselMessage("飲み会の候補を出しています．スマートフォンから見てください．", bubbleList)
}