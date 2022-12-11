// pages/preOrder/preOrder.js
const app=getApp()
const db=wx.cloud.database()
Page({
  data:{
    list:[]
  }
  ,
  onLoad:function(options){
    wx.setNavigationBarTitle({
      title: '车位预约',
      success: function(res) {
        // success
      }
    })
    db.collection('userInfo').where({   
      _openid:app.globalData.useropenid   
             }).get().then(
               res=>{
                 console.log('查找成功',res)
     this.setData({
      list:res.data
  })
               })
               .catch(res=> {
                   console.log("输入错误")
               })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})