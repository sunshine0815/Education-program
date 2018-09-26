import settings from '../../datas/settings.js'
import util from '../../utils/util.js'
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    settings:[],
    expiresData: {
      id: 10001,
      "title": "VIP会员到期时间",
      // "date": util.formatTime(new Date(),"YYYY-MM-DD HH:mm"),
      "date": new Date(),
      "type": 'date'
    }
  },

  navigateTo(e){
    wx.navigateTo({
      url: e.detail.navigateTo,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      settings
    })
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