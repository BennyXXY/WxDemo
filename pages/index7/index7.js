// pages/index7/index7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.canIUse('console.log'))
    const base64 = 'CxYh'
    const arrayBuffer = wx.base64ToArrayBuffer(base64)
    console.log(arrayBuffer)
    //const arrayBuffer = new Uint8Array([11, 22, 33])
    const base65 = wx.arrayBufferToBase64(arrayBuffer)
    console.log(base65)
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },

  tzonclic: function () {
    wx.navigateTo({
      url: '../index6/index6',
      events: {
        acceptDataFromOpenedPage: function (data) {
          console.log(data + "1号")
        },
        someEvent: function (data) {
          console.log(data + "2号")
        }
      },
      success: function (res) {
        let obj = {
          name: 'xinxiangyu',
          valeu: '辛翔宇'
        }
        // var objdata=JSON.stringify(obj)
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: obj })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})