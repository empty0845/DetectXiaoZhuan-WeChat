import {configRequest,baseUrl} from '../../utils/request.js'
import {setColor} from '../../utils/color.js'
Page({
  data: {
    imageUrl:'',
    baseUrl
  },
  onLoad: function () {
    this.getConfig()
  },
  async getConfig(){
    try {
      const data=await configRequest();
      this.setData({
        imageUrl:data.data.imageUrl
      })
      setColor(data.data.color)
    } catch (error) {
      wx.showToast({
        title: '错误请求',
        icon:"error",
        duration:2000
      })
    }
  },
  enterPhotoPage(){
    wx.navigateTo({
      url: '../cameraPage/cameraPage',
    })
  }
})