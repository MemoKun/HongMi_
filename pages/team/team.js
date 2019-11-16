// pages/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:"程序设计",
    title: "服务外包有没有想做小程序的？",
    date: "2019.10.19",
    read: 23,
    collect: 0,
    portrait_src: '/img/head.png',
    username: 'Y',
    school: '北京大学',
    needpeople:3,
    teamedpeople:2,
    question: "准备做个废品回收O2O的小程序，主要用于组织废品回收者与企业、用户之间的联系，同时也能方便用户卖废品。具体信息可加Q私聊",
    commentList: [
      {
        head_src: '/img/head3.jpg',
        username: "孙骁骁",
        date: "2019.10.23",
        school: "清华大学",
        comment: "是预约上门回收废品的那种吗？",
        reply: [
          {
            reply_user: "Y",
            reply_content: "对",
          }
        ],
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