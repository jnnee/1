const db=wx.cloud.database()
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    key1:null,
    key2:null,
    key3:null,
  },

  getValue1(e){
    this.setData({
      key1:e.detail.value,
     
    })
  },
  getValue2(e){
    this.setData({
      key2:e.detail.value,
     
    })
  },
  getValue3(e){
    this.setData({
      key3:e.detail.value,
     
    })
  },
  enter() {
        let key1=this.data.key1
        let key2=this.data.key2
        let key3=this.data.key3
        db.collection('userInfo').where({   
          _openid:app.globalData.user_openid
      }).update({
          data:{
            zhuanye:key1,
            banji:key2,
            number:key3
          },
        success(res){
          console.log('添加成功',res)
          wx.navigateTo({
            url: "../denglu/denglu"
          })
        },   
          fail(res){
            console.log("添加失败")}
        })
    } ,


  /**
   * 生命周期函数--监听页面加载
   */
})