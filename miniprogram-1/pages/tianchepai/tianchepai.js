const db=wx.cloud.database()
var app=getApp()
Page({
  data: { 
    key:null,
  },

  getValue(e){
    this.setData({
      key:e.detail.value,
     
    })
  },
  enter() {
    if (this.data.key) {
        let key=this.data.key
        db.collection('userInfo').where({   
          _openid:app.globalData.user_openid
      }).update({
          data:{
            chepaihao:key
          },
        success(res){
          console.log('添加成功',res)
         
        },   
          fail(res){
            console.log("添加失败")}
        })
    } 
},


  })