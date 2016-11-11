var app = getApp()
Page({
    data: {
        navLeftItems: [{
                id: 1,
                tree: {
                    desc: '女装'
                }
            },{
                id: 2,
                tree: {
                    desc: '男装'
                }
            },{
                id: 3,
                tree: {
                    desc: '鞋'
                }
            },{
                id: 4,
                tree: {
                    desc: '内衣'
                }
            },{
                id: 5,
                tree: {
                    desc: '儿童用品'
                }
            },{
                id: 6,
                tree: {
                    desc: '配件箱包'
                }
            },{
                id: 7,
                tree: {
                    desc: '运动户外'
                }
            },{
                id: 8,
                tree: {
                    desc: '美妆饰品'
                }
            },{
                id: 9,
                tree: {
                    desc: '孕妇装'
                }
        }],
        navRightItems: [{
            tree: {
                nodes: [{},{
                    tree: {
                        nodes: [{
                            id:123216004,
                            tree: {
                                desc: '时尚套装'
                            }
                        },{
                            id:50000697,
                            tree: {
                                desc: '毛针织衫'
                            }
                        }]
                    }
                }]
            }
        },{
            tree: {
                nodes: [{},{
                    tree: {
                        nodes: [{
                            id:50000436,
                            tree: {
                                desc: 'T恤'
                            }
                        },{
                            id:50011123,
                            tree: {
                                desc: '衬衫'
                            }
                        }]
                    }
                }]
            }
        }],
        curNav: 1,
		curIndex: 0
    },
    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})
