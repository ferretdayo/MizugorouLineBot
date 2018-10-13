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
    return res.data.results.shop
  }
}