Page({

  /**
   * 页面的初始数据
   * { "text": "首页", "id": 0 }, { "text": "动画", "id": 1 }, { "text": "番剧", "id": 2 }, { "text": "国创", "id": 3 }, { "text": "音乐", "id": 4 }, { "text": "舞蹈", "id": 5 }, { "text": "记录", "id": 6 }, { "text": "科技", "id": 7 }, { "text": "游戏", "id": 8 }, { "text": "亲子", "id": 9 }, { "text": "娱乐", "id": 10 }
   */
  data: {
    //被点击首页导航的索引
    currentIndexNav: 0,
    //首页导航数组
    navList: []
  },
  //点击首页导航按钮
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  /**
   * 获取首页导航数据 
   */
  getNavList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res) {
        console.log(res)
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取首页导航数据
    this.getNavList();
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