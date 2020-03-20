// pages/player/player.js
const app = getApp().globalData
const util = require("../../utils/util.js");
// const regeneratorRuntime = require('../../utils/runtime.js');
const manager = wx.getBackgroundAudioManager();
Page({
  //播放列表点击更换歌曲
  tapChangeSong(e) {
    wx.setStorageSync(
      "currentIndex", e.currentTarget.dataset.index
    )
    this.init();
  },
  //是否显示播放列表
  showSongsList() {
    let isShowList = this.data.isShowList;
    this.setData({
      isShowList: !isShowList
    })
  },
  //改变播放模式
  changeMode() {
    let {
      currentModeIndex,
      modeList,
    } = this.data;

    currentModeIndex++;
    currentModeIndex = currentModeIndex == modeList.length ? 0 : currentModeIndex;

    wx.showToast({
      title: modeList[currentModeIndex].name,
      duration: 1500,
      icon: 'none'

    })
    this.setData({
      currentModeIndex,
      playMode: modeList[currentModeIndex].iconName
    })
  },
  //获取不同模式下下一首歌曲的下标
  changeCurrentIndex(flag) {
    let {
      songsList,
      currentModeIndex,
      modeList,
    } = this.data;
    if (modeList[currentModeIndex].name == "随机播放") {
      return util.getRandom(0, songsList.length - 1)
    }
    let index = this.data.currentIndex;
    if (flag == 'prev') {
      index = index == 0 ? this.data.songsList.length - 1 : index - 1;
    } else if (flag == 'next') {
      index = index == (this.data.songsList.length - 1) ? 0 : index + 1;
    }
    return index;
  },
  /**
   * 页面的初始数据
   */
  data: {
    playIcon: 'icon-bofang',
    playMode: 'icon-xunhuan',
    status: 'playing',

    songsList: [],
    currentSong: null,
    duration: '00:00',
    songId: null,
    currentIndex: null,
    currentTime: '00:00',
    lyric: [{
      lrc: "暂无歌词",
      sec: '0'
    }],
    isShowLyric: false,
    modeList: [{
      iconName: 'icon-xunhuan',
      name: '列表循环'
    }, {
      iconName: 'icon-danquxunhuan',
      name: '单曲循环'
    }, {
      iconName: 'icon-suiji',
      name: '随机播放'
    }],
    currentModeIndex: 0,
    isShowList: false
  },

  navBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  //初始化
  init() {
    let songsList = app.songsList;
    let currentIndex = wx.getStorageSync('currentIndex');
    let currentSong = (songsList && songsList[currentIndex]) || app.songlist[currentIndex];
    let duration = currentSong.dt || currentSong.duration;
    let singers = ''
    let ar = currentSong.ar || currentSong.artists

    
    for (let prop in ar) {
      if (prop >= ar.length - 1) {
        singers += ar[prop].name
      } else {
        singers = singers + ar[prop].name + ' & '
      }

    }
    console.log("-------------------初始化数据--------------------")
    console.log(songsList,duration)
    this.setData({
      currentSong,
      songsList,
      currentIndex,
      singers
    })
    console.log(this.data.currentSong)
    this.getSongUrl(currentSong.id);
    this.getLyric(currentSong.id);
  },
  //获取音乐URL
  getSongUrl(songId) {
    const that = this;
    util.get('http://192.168.3.6:3000/song/url', {
      id: songId
    }).then(res => {
      const url = res.data.data[0].url;
      // console.log(url)
      that.createPlayer(url);
    })
  },
  //获取歌词
  getLyric(songId) {
    util.get('http://192.168.3.6:3000/lyric', {
      id: songId
    }).then(res => {
      // console.log(res)
      this.setData({
        lyric: util.formatLyric(res.data.lrc.lyric)
      })
      // console.log(this.data.lyric)
    })
  },
  //创建播放器 监听播放事件
  createPlayer(songUrl) {
    console.log('create')
    if (songUrl) {
      manager.src = songUrl;
      manager.title = this.data.currentSong.name;
      manager.coverImgUrl = this.data.currentSong.al.picUrl || this.data.currentSong.album.picUrl;
      console.log(manager.src,manager.title)
    } else {
      wx.showToast({
        title: '该冲会员了兄弟',
        icon: 'none',
        duration: 3000
      })
      this.next();
    }
    manager.onPlay(() => {
      console.log('play')
      let duration = manager.duration;
      this.setData({
        playIcon: 'icon-zanting',
        status: 'playing'
      })
    })
    manager.onPause(() => {
      console.log('pause')
      this.setData({
        playIcon: 'icon-bofang',
        status: 'pause'
      })
    })
    //更新
    manager.onTimeUpdate(() => {
      const that = this;
      const currentTime = manager.currentTime;
      this.setCurrentLyric();
      this.setData({
        currentTime: util.formatTime(currentTime * 1000),
        duration: util.formatTime(manager.duration * 1000),
        percentSlider: Math.round(currentTime * 1000 / manager.duration * 100),
        sliderValue: manager.currentTime,
        sliderMax: manager.duration
      })
      console.log(this.data.currentTime,this.data.duration,this.data.percentSlider,this.data.sliderValue,this.data.sliderMax)
    })
    //结束时切歌
    manager.onEnded(() => {
      let {
        currentModeIndex,
        modeList,
      } = this.data;

      if (modeList[currentModeIndex].name == "单曲循环") {
        this.init();
      } else {
        this.next();
      }

    })
    manager.play();
  },
  //播放状态改变
  playStatusChange() {
    if (this.data.status === 'pause') {
      manager.play();
    } else {
      manager.pause();
    }
  },
  //进度条拖动事件
  dragProgressBar: function(e) { // 拖动进度条
    const position = e.detail.value;
    manager.seek(position);
    this.setData({
      currentTime: util.formatTime(position * 1000), // 进度时长
      sliderValue: position, // 当前滑块值
    });
  },
  //获取当前显示的歌词
  getCurrentLyricIndex() {
    const time = manager.currentTime;
    const lrcArray = this.data.lyric;
    for (let i = lrcArray.length - 1; i >= 0; i--) {
      let lrcObj = lrcArray[i];
      if (lrcObj.sec < time) { //找出第一个比当前时间小的下标
        return i;
      }
    }
    return -1; //表示目前无法播放任何一句歌词
  },
  //设置当前高亮的歌词以及位置
  setCurrentLyric() {
    let index = this.getCurrentLyricIndex();
    const lyricWrapperHeight = 800;
    const rowHeight = 108
    let top = index * rowHeight + rowHeight / 2 - lyricWrapperHeight / 2;
    if (top < 0) {
      top = 0;
    }
    this.setData({
      activeLyricIndex: index,
      lyricTop: top
    })
  },
  onToggleShowLyric() { //显示 隐藏 歌词界面
    let isShowLyric = this.data.isShowLyric;
    this.setData({
      isShowLyric: !isShowLyric
    });
  },
  //不同播放模式下切歌时获取歌曲下标

  prev() {
    wx.setStorageSync(
      "currentIndex", this.changeCurrentIndex('prev')
    )
    this.init();
  },
  next() {
    wx.setStorageSync(
      "currentIndex", this.changeCurrentIndex('next')
    )
    this.init();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})