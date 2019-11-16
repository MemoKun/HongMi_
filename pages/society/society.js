// pages/society/society.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar:["问答","组队"],
    currentIndex:0,
    answerList:[
      {
        portrait_src:'/img/head.png',
        username:'匿名用户',
        school:'匿名学校',
        title:"怎么学算法？",
        date:'2019.10.17'
      },
      {
        portrait_src:'/img/head1.jpg',
        username:'小黄鸡',
        school:'中南大学',
        title:"有哪些你不知道的算法经验技巧？",
        date:'2019.10.15'
      },
      {
        portrait_src:'/img/head2.jpg',
        username:'孙静',
        school:'复旦大学',
        title:"三招教你如何应对ACM",
        date:'2019.10.14'
      },
      {
        portrait_src:'/img/head.png',
        username:'匿名用户',
        school:'匿名学校',
        title:"有没有了解算法竞赛的？",
        date:'2019.10.13'
      },
      {
        portrait_src: '/img/head.png',
        username: '匿名用户',
        school: '匿名学校',
        title: "雅思英语怎么学？",
        date: '2019.10.11'
      },
    ],
    teamList:[
      {
        portrait_src: '/img/head5.jpg',
        username: '王超',
        school: '东南大学',
        type:'数学建模',
        title: "ACM求一波队友~",
        date: '2019.10.21'
      },
      {
        portrait_src: '/img/head.png',
        username: 'Y',
        school: '北京大学',
        type: '程序设计',
        title: "服务外包有没有想做小程序的？",
        date: '2019.10.19'
      },
      {
        portrait_src: '/img/head2.jpg',
        username: '秦晓璐',
        school: '河南大学',
        type: 'PPT',
        title: "PPT比赛求设计专业的队友",
        date: '2019.10.14'
      },
      {
        portrait_src: '/img/head1.jpg',
        username: '李正义',
        school: '吉林大学',
        type: '算法',
        title: "算法天梯赛来两个厉害点的队友",
        date: '2019.10.13'
      },
      {
        portrait_src: '/img/head3.jpg',
        username: '徐贝贝',
        school: '深圳大学',
        type: '创新创业',
        title: "求一个有新鲜创新想法的队友",
        date: '2019.10.13'
      },
    ]
  },
  navbarTab:function(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})