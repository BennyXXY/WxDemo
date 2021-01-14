Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    animation: 0
  },

  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  // wx.request({
                  //  // 自行补上自己的 APPID 和 SECRET
                  //  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                  //  success: res => {
                  //   // 获取到用户的 openid
                  //   console.log("用户的openid:" + res.data.openid);
                  //  }
                  // });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });


    wx.getSystemInfo({
      success: (res) => {
        //设置canvas的宽度 屏幕宽度 -20 的 2 倍
        let canvasWidth = (res.screenWidth - 20) * 2
        //设置canvas的高度，屏幕高度 -500 的 2 倍
        let canvasHeight = (res.screenHeight - 500) * 3
        //定义画布对象
        const MyCanvas = wx.createCanvasContext('MyCanvas')

  

        // Create linear gradient
        const grd = MyCanvas.createLinearGradient(150, 0, 300, 0)
        grd.addColorStop(0, 'red')
        grd.addColorStop(1, 'white')

        // Fill with gradient
        MyCanvas.setFillStyle(grd)
        MyCanvas.fillRect(150, 10, 300, 80)
        MyCanvas.setFontSize(20)
        MyCanvas.setFillStyle('#ffffff')
        MyCanvas.fillText('好啊',180,40)

        //在画布上绘制文本
        MyCanvas.setFontSize(20)//文本大小
        MyCanvas.fillText('XinXiangyu', 20, 30)//文本，X轴位置，Y轴位置
        //在画布上绘制矩形
        MyCanvas.rect(20, 40, 100, 50)//X轴位置，Y轴位置，宽度，高度
        //在画布上绘制原型
        //创建一个圆可以在指定起始弧度为 0 ，终止弧度为 2 * Math.PI
        MyCanvas.arc(70, 150, 50, 0, 2 * Math.PI)//圆心X坐标，圆心Y坐标，圆的半径，起始弧度（在3点钟方向），终止弧度
        MyCanvas.setFillStyle('#f00')//填充背景颜色
        MyCanvas.fill()//用fill 方法真正的画到 canvas 中
        MyCanvas.draw()//绘制
        that.setData({
          canvasWidth: canvasWidth,
          canvasHeight: canvasHeight,
          screenHeight: canvasHeight / 2,
          screenWidth: canvasWidth / 2
        })
      },
    })
  },

  onReady: function () {
    this.animation = wx.createAnimation()
  },
  rotate() {
    this.animation.rotate3d(Math.random(), Math.random(), Math.random(), 180).step()
    this.setData({ animation: this.animation.export() })
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }
})