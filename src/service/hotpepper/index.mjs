import { http } from '../http'

export default {
  searchFoodShop: async(keyword) => {
    const res = await http.get('http://webservice.recruit.co.jp/hotpepper/gourmet/v1', {
      params: {
        key: process.env.HOTPEPPER_API_KEY,
        keyword,
        count: 20,
        format: 'json'
      }
    }).catch(e => console.log(e))
    if (res.data.results.results_returned >= 0) {
      return res.data.results.shop
    } else {
      return []
    }
  }
}