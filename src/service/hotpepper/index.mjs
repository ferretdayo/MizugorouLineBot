import { http } from '../http'

export default {
  searchFoodShop: async(keyword) => {
    const res = await http.get('http://webservice.recruit.co.jp/hotpepper/gourmet/v1', {
      params: {
        key: process.env.HOTPEPPER_API_KEY,
        keyword,
        format: 'json'
      }
    }).catch(e => console.log(e))
    console.log("API FIN")
    return parseForImageCarousel(res.data.results.shop)
  }
}

function parseForImageCarousel(list) {
  return list.map(value => {
    return {
      imageUrl: value.photo.mobile.l,
      action: {
        type: 'uri',
        label: '詳細に見る',
        uri: value.urls.pc
      }
    }
  })
}