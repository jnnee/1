const app=getApp()
const db=wx.cloud.database()
Page({
  data: {
       hiddenBlean1:true,
       hiddenBlean2:false,
       userInfo:'',//用户信息
       nickName:'',//用户姓名
       avatarUrl:'',//用户头像地址
       m:0,//用户的登录状态
      userid:null,
     list:[],
       openid:'',//获取用户id
  }, 
//退出登录
  loginOut() {
    this.setData({
      userInfo:'',
      hiddenBlean1:true,
      hiddenBlean2:false,
      m:0
    })
    wx.request({
      url: '',
      method:'POST',
      header: {
        'Content-Type':'application/json'
      },
      success:res=> {
        console.log(res)
      }
    })
    wx.setStorageSync('user', null),
    wx.showToast({
      title: '已退出登录',
    })
  },
  //跳转页面
  tianchepai:function () {
      wx.navigateTo({
        url: "../tianchepai/tianchepai"
      })
    }, 
    xiugaiziliao:function () {
      wx.navigateTo({
        url: "../xiugaiziliao/xiugaiziliao"
      })
    }, 
    aboutus:function () {
      wx.navigateTo({
        url: "../about/about"
      })
    }, 
 
//获取用户信息
  getUersProfile:function() {
   
    if(this.data.m==0) {
    wx.requestSubscribeMessage({
      tmplIds: ['-QIGTLDw9mb4nGhMv22A8Ziik0QR0y2zUvmlWG8Yrds'],
      success(res){
        console.log("授权成功",res)},
        fail(res){
          console.log("授权失败",res)
        }
      })
        wx.getUserProfile({
        desc: '登陆后使用全部功能',
        tmplIds: ['-QIGTLDw9mb4nGhMv22A8Ziik0QR0y2zUvmlWG8Yrds'],
        success:(res)=> {
         
          let user = res.userInfo
          console.log('获取成功',res.userInfo)
          app.globalData.userInfo=res.userInfo
          this.setData({
            m:1,
            nickName : res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
            hiddenBlean2:true,
            hiddenBlean1:false
          })
          wx.cloud.database().collection('userInfo').add({
            data: {
              avatarUrl: user.avatarUrl,
              nickName: user.nickName
            },
            success: res => {
              console.log(res)  
             
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
            var chepai=res.data.chepaihao
            that.globalData.userchepai=chepai
                      })
                      .catch(res=> {
                          console.log("输入错误")
                      })
          wx.showToast({
            title: '登陆成功',
          })
          wx.hideToast()
          this.onShow();
        },
        fail:(res)=> {
          console.log('授权失败',res)
        },
      })
    }
    else {
      wx.showToast({
        title: '您已经登录了',
      })
    }
},
//获取openid

onShow:function(){
  
},

go_update(){

} 
})