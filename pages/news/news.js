//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userinfo:[],
    activeIndex: 0,
    mainFooter: [
      {
        id: 1,
        name: '关于召开中国电子商会中国电子商会供应链与物流专委会筹备会议召开与物流专委会筹备会议召',
        calendar: "2020.10.06",
        number: "1.4",
        give: '999',
        image: "/assets/image/tupian2.png"
      },
      {
        id: 2,
        name: '关于召开中国电子商会中国电子商会供应链与物流专委会筹备会议召开与物流专委会筹备会议召',
        calendar: "2020.10.06",
        number: "1.4",
        give: '999',
        image: "/assets/image/tupian3.png"
      },
      {
        id: 3,
        name: '关于召开中国电子商会中国电子商会供应链与物流专委会筹备会议召开与物流专委会筹备会议召',
        calendar: "2020.10.06",
        number: "1.4",
        give: '999',
        image: "/assets/image/tupian4.png"
      },
      {
        id: 4,
        name: '关于召开中国电子商会中国电子商会供应链与物流专委会筹备会议召开与物流专委会筹备会议召',
        calendar: "2020.10.06",
        number: "1.4",
        give: '999',
        image: "/assets/image/tupian4.png"
      },
      {
        id: 5,
        name: '关于召开中国电子商会中国电子商会供应链与物流专委会筹备会议召开与物流专委会筹备会议召',
        calendar: "2020.10.06",
        number: "1.4",
        give: '999',
        image: "/assets/image/tupian2.png"
      },
    ]
  },
  onLoad() {
    console.log(11111111);
    const that = this
    wx.request({
      url: 'https://coc.gitmen.cn/api/list_new_category/?association=123456',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        const a = res.data.result.results
        that.setData({userinfo: a})
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  toggleCurrent(e) {
    const index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      activeIndex: index,
    })
  },
  tiaozhuan() {
    wx.navigateTo({
      url: "/pages/news-details/details"

    })
  },
  
})