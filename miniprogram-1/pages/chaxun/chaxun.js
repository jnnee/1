const db=wx.cloud.database()
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
Page({
  data: {
    isShow: false,
    list:[],
    key:null,
    chepaihao:'',
   id:''
    },
    //将数据显示，提交表单
    getValue(e){
      this.setData({
        key:e.detail.value
      })
    },
    goSearch() {
      if (this.data.key) {
          let key=this.data.key
          db.collection('userInfo').where({   chepaihao:db.RegExp({
            regexp:key,
            option:'i',
          }),
        }).get().then(
          res=>{
            console.log('查找成功',res)
            this.setData({
              list:res.data,   
            })
            wx.setStorageSync('id', res.data._openid)
          })
          .catch(res=> {
              console.log("输入错误")
          })
      } else {
          //搜索内容为空
          wx.showToast({
              icon: 'error',
              title: '请输入搜索内容'
          })
      }
  },
  phoneCall: function(e) {
    wx.makePhoneCall({
        //    微信提供的这个api就是用来拨打电话的
        phoneNumber: e.currentTarget.dataset.replyPhone,
        success: function(res) {
            // console.log(res.data)
        },
    })
},    
//返回
returnAction:function(){
  var isShow=!this.data.isShow;
  this.setData({
  isShow:isShow
 })
},   
weixinyicheAction(){
  wx.cloud.callFunction({
    name:"fasong",
    data:{
            openid: wx.getStorageSync('id')
           },
   success(res){
    console.log("发送成功",res)},
  fail(res){
    console.log("发送失败",res)
  },
   })
  }
})