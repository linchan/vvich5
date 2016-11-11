var app = getApp()
Page( {
  data: {
    cartImg: '../../images/cart-null.png',
    tipWords: '购物车空空如也'
  },
  onLoad: function(){
    var that = this
    wx.request({
        url: 'http://local.vvic.com/apic/user/cart/list?user_key=ZTNhYWM5N2QtNjBhYS00NjYxLTgyNDAtODRmNmQ4YjVkMGRk',
        mothod: 'GET',
        data: {},
        header: {
            'Accpet': 'application/json'
        },
        success: function(res){
            console.log(res);
            thata.setData({
                cartList: res.data
            })
        }
    })
  }
})
