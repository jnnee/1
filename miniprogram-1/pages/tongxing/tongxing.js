// pages/index/index.js
var app = getApp()

Page({
  data: {
    markers: [{
      iconPath: "/images/park.png",
      id: 0,
      latitude:  28.80967,
      longitude: 104.674557,
      width: 40,
      height: 48,
    }, {
      iconPath: "/images/park.png",
      id: 1,
      latitude: 28.80957,
      longitude:104.674547,
      width: 40,
      height: 48,
    }, {
      iconPath: "/images/park.png",
      id: 1,
      latitude: 28.80947,
      longitude: 104.674587,
      width: 40,
      height: 48,
    }, {
      iconPath: "/images/park.png",
      id: 1,
      latitude: 28.80937,
      longitude: 104.674557,
      width: 40,
      height: 48,
    }],
    polyline: [{
      points: [{
        longitude: 104.674557,
        latitude: 28.80967
      }, {
        longitude: 104.674557,
        latitude: 28.80967
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
    //controls: [{
     // id: 1,
     //iconPath: '/images/car.png',
     // position: {
      //   left: app.globalData.windowWidth/2-32,
      //  top: app.globalData.windowHeight/2-84,
//width: 64,
    //  height: 64
    //  },
     // clickable: true
    // }]
  },
  onLoad: function (e) {
  
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  bindParkingListItemTap: function () {
    wx.navigateTo({
      url: "../detail/detail"
    })
  },
  openParkingMap: function () {
    wx.navigateTo({
      url: '../parkinglotMap/parkinglotMap',
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  }
})
