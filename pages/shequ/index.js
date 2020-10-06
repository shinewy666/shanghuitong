Page({
  data: {

    src1: '../images/1.jpg',
    src2: '../images/2.jpg',
    src3: '../images/3.jpg',
    touxiang: '../images/wode.png',

    xiaoxi: [{
      xiaoxi: 23,


    }],


    liuyan: [
      {
        id: 1,
        name: "lifugui",
        text:"中国首次火星探侧任务来了！“天文一号”",
        liuyantu: '../images/1.jpg',
        jinhua: "精华",
        del: "删除",
        xiaoxi: '../images/xiaoxi.png',

        liuyanl:0,
        liulan: '../images/liulan.png',

        yulanl:1
      },
      {
        id: 2,
        name: "yqq",
        text: "海关总暑：今年上半年中美贸易总值1.65万亿元",
        liuyantu: '../images/2.jpg',
        jinhua: "精华",
        del: "删除",
        liuyanl: 1,
        yulanl: 3
      },
      {
        id: 3,
        name: "123",
        text: "海关总暑：今年上半年中美贸易总值1.65万亿元",
        liuyantu: '../images/3.jpg',
        jinhua: "精华",
        del: "删除",
        liuyanl: 1,
        yulanl: 3
      },
      

    ],



    quanbu: [{
        id: 1,
        touxiang: '../images/3.jpg',
        name: "全部"

      },
      {
        id: 2,
        touxiang: '../images/3.jpg',
      
        name: "健康生活"
      },
      {
        id: 3,
        touxiang: '../images/1.jpg',
       
        name: "美食"
      },
      {
        id: 4,
        touxiang: '../images/3.jpg',
       
        name: "数码"
      },
      {
        id: 5,
        touxiang: '../images/2.jpg',
 
        name: "休闲娱乐"
      }
    ],
    toggleCurrent(e) {
      const id = e.currentTarget.dataset.id
      this.setData({
        activeIndex: id,
        currentIndex: id - 1
      })
    },
    change(e) {
      const id = e.detail.current
      this.setData({
        activeIndex: id + 1
      })
    }

  }
})