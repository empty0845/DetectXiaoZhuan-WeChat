export const baseUrl = 'http://192.168.1.1:5000' // 你的ipv4地址加端口号

export const configRequest = async () => {
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'get',
      url: `${baseUrl}/config`,
      success: res => {
        resolve(res.data)
      },
      fail: error => {
        reject(error)
      },
    })
  })
}
export const uploadImageRequest = async (filePath) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      filePath,
      name: 'image',
      method: 'POST',
      url: `${baseUrl}/uploadImage`,
      success: res => {
        resolve(JSON.parse(res.data))
        // resolve(res.data)
      },
      fail: error => {
        reject(error)
      },
    })
  })
}
export const articleRequest = async (id) => {
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'get',
      url: `${baseUrl}/article`,
      data:{
        id
      },
      success: res => {
        resolve(res.data)
      },
      fail: error => {
        reject(error)
      },
    })
  })
}
