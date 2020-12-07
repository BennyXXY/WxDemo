// pages/kz/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: "",
    itemList: [{ classname: "数学", classteacher: "辛老师", classnum: 10, tag: [{ tagitem: "数学" }, { tagitem: "三年级" }] },
    { classname: "语文", classteacher: "于老师", classnum: 5, tag: [{ tagitem: "初中" }] },
    { classname: "英语", classteacher: "席老师", classnum: 122, tag: [{ tagitem: "" }] },
    { classname: "体育", classteacher: "邓老师", classnum: 12, tag: [{ tagitem: "幼儿园" }] },
    { classname: "体育", classteacher: "席老师", classnum: 122, tag: [{ tagitem: "" }] },
    { classname: "体育", classteacher: "席老师", classnum: 122, tag: [{ tagitem: "" }] },
    { classname: "体育", classteacher: "席老师", classnum: 122, tag: [{ tagitem: "" }] }
    ]
  },

  /**
   * 搜索
   */
  leftact: function () {
    console.log("搜索")
  },
  /**
   * 清楚搜索框
   */
  rightact: function () {
    this.setData({
      input: ""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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