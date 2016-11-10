var dai = require('../../utils/dai.js')
var app = getApp()
Page({
  data: {
    title: '代发团队',
    daiList: []
  },
  onLoad: function () {
    var that = this
    console.log(dai.list)
    // that.setData({
    //   daiList: dai.list
    // })
  }
})
