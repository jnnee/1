Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  nextpage2: function(){
    wx.switchTab({
      url: '/pages/denglu/denglu',
    })
  },   

  login(){
    console.log('点击事件执行')
    wx.getUserProfile({
      desc: '必须授权才可以继续使用',
      success(res){
        console.log('授权成功',res)
        wx.redirectTo({
          url: 'pages/denglu/deghlu',
        })
      },
      fail(res){
        console.log('授权失败',res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

