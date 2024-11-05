Page({
  data: {
    flush: false,
    devicePosition: 'back',
    isShow: false,
    tempImagePath: ''
  },
  onLoad: function () {

  },
  onShow: function () {
    this.setData({
      isShow: true
    })
  },
  onHide: function () {
    this.setData({
      isShow: false
    })
  },
  back() {
    wx.navigateBack({})
  },
  changeFlush() {
    const flush = !this.data.flush
    this.setData({
      flush
    })
  },
  changeDevicePosition() {
    const devicePosition = this.data.devicePosition === 'back' ? 'front' : 'back'
    this.setData({
      devicePosition
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          tempImagePath: res.tempImagePath
        })
        wx.navigateTo({
          url: `../resultPage/resultPage?tempImagePath=${res.tempImagePath}`,
        })
      },
      fail: (err) => {
        wx.showToast({
          title: err.detail,
          mask: true,
          icon: 'error'
        })
      }
    })
  },
  error(e) {}
})