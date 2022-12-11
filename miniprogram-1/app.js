// app.js

App({
  globalData: {
    //用户openid
    useropenid: '',
    list:[],
    userid: '',
    userchepai:'',
    //用户信息
    userInfo: null
  },
  onLaunch() {
    // 展示本地存储能力
    wx.cloud.init({
      env:"cheliangguanli-0gyn2gk2c75495d1",
      traceUser:true
    })
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that=this;
    wx.cloud.callFunction({
      name:'getOpenid',
      success(res){
        console.log("获取到的openid:",res.result) 
        var useropenid=res.result.openid 
        that.globalData.useropenid=useropenid 
        console.log(that.globalData.useropenid)  
      }
  }) 
 
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }
 
    })