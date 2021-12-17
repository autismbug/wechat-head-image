/*
 * @Author: whc
 * @Date: 2019-12-13 17:46:59
 * @LastEditTime : 2020-01-05 15:14:33
 */
// pages/about/about.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [
      '小程序作者：bug超会玩',
      '意见反馈添加微信：autismbug',
      '个人网站：https://www.autismbug.cn',
      'github：https://github.com/autismbug',
      '小程序版本：v1.0.6',
    ],
  },

  clickItem: function(e) {
    const index = e.currentTarget.dataset.index;
    switch (index) {
      case 1:
        wx.setClipboardData({
          data: 'autismbug',
          success: (res) => {
            wx.showToast({
              title: '复制成功',
            });
          }
        });
      break;
      case 2:
        wx.setClipboardData({
          data: 'https://www.autismbug.cn',
          success: (res) => {
            wx.showToast({
              title: '复制成功',
            });
          }
        });
        break;
      case 3:
        wx.setClipboardData({
          data: 'https://github.com/autismbug',
          success: (res) => {
            wx.showToast({
              title: '复制成功',
            });
          }
        });
        break;
      default:
      break;
    }
  },

  clickContactWe: function(e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '关于',
    });
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
    return {
      title: '微信节日头像生成',
      desc: '自动生成各种节日（圣诞节，春节，元宵节...）图像，让我们为节日欢乐祝福吧',
      path: '/pages/index/index',
      imageUrl: app.globalData.userInfo.highAvatarUrl,
    };
  }
})