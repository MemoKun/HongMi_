// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"怎么学算法?",
    date:"2019.10.17",
    read:156,
    collect:0,
    portrait_src:'/img/head.png',
    username:'匿名用户',
    school:'匿名学校',
    question:"萌新刚上大一，没什么基础，想学习算法的话应该怎么开始？看什么书或者有什么网站可以推荐一下吗？",
    commentList:[
      {
        head_src:'/img/head3.jpg',
        username:"张",
        date:"2019.10.17",
        school:"四川大学",
        comment:"推荐看算法导论",
        up_nums:3,
        reply:[
          {
            reply_user:"XYZ",
            reply_content:"有什么推荐的网站吗？",
          }
        ],
      },
      {
        head_src: '/img/head4.jpg',
        username: "蔡",
        date: "2019.10.17",
        school: "匿名学校",
        comment: "同求",
        up_nums: 0,
        reply: [],
      },
    ],
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
    console.log(this.list)
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