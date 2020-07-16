<template>
  <view class="content">
    <view class="player">
      <view class="start-action">
        <r-image width="177" height="177" src="/static/img/bofang.png" mode="aspectFit"></r-image>
      </view>
    </view>
    <view class="course-title r-padding-28">
      課程名稱課程名稱課程名稱 課程名稱
    </view>
    <view class="t-info">
      <r-avatar size="60" src="/static/img/head.png"></r-avatar>
      <view class="t-name">
        名稱
      </view>
      <c-button height="65">導師檔案</c-button>
    </view>
    <!-- tabs -->
    <view class="tabs r-m-t-10">
      <r-tabs :list="tabList" fontSize="50" :bold="false" barWidth="100" :current="tabCurrent" @change="tabChange"
        activeColor="#000000" inactiveColor="#858585" :barStyle="barStyle"></r-tabs>
    </view>
    <!-- tabs-content -->
    <!-- 课堂 -->
    <view class="tabs-content r-flex r-p-b-80" v-if="tabCurrent == 0">
      <view class="course-list r-m-t-50">
        <view class="course-item">
          <view class="course-img">
            <r-image width="83" height="83" src="/static/img/bofang.png"></r-image>
          </view>
          <view class="course-info">
            <view class="course-name">
              名稱名稱名稱名稱名 名稱
            </view>
            <view class="course-index">
              第1課
            </view>
          </view>
        </view>
        
        <view class="course-item">
          <view class="course-img">
            <r-image width="83" height="83" src="/static/img/bofang.png"></r-image>
          </view>
          <view class="course-info">
            <view class="course-name">
              名稱名稱名稱名稱名 名稱
            </view>
            <view class="course-index">
              第1課
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 评价 -->
    <view class="tabs-content r-flex r-p-b-80" v-if="tabCurrent == 1">
      <view class="pingjia r-p-28">
        <view class="pj-header r-m-t-10">
          <view class="pj-total">
            4.8 總評分
          </view>
          <view class="pj-total-start r-m-t-12">
            <r-rate size="50" disabled value="5"></r-rate>
          </view>
        </view>
        <!-- 评价主体内容 -->
        <view class="pj-body r-p-t-30">
          <view class="pj-item r-m-t-20">
            <view class="pj-item-content">
              課程很棒！ 學了很多東西，謝謝老師。課程很棒！ 學了很多東西，謝謝老師。
            </view>
            <view class="pj-item-info r-m-t-10">
              <text class="pj-item-name">陳偉</text>
              <text class="pj-item-time r-p-l-10">1-02-2020</text>
            </view>
            <view class="pj-item-rate">
              <r-rate size="30" disabled value="5"></r-rate>
            </view>
          </view>
          <view class="pj-item r-m-t-20">
            <view class="pj-item-content">
              課程很棒！ 學了很多東西，謝謝老師。
            </view>
            <view class="pj-item-info r-m-t-10">
              <text class="pj-item-name">陳偉</text>
              <text class="pj-item-time r-p-l-10">1-02-2020</text>
            </view>
            <view class="pj-item-rate">
              <r-rate size="30" disabled value="5"></r-rate>
            </view>
          </view>
        </view>
        <!-- pj action -->
        <view class="pj-action-open r-flex r-col-center r-row-center" @click="onOpenPJ">
          我要評價>
          <c-button v-if="openPJ">提交</c-button>
        </view>
        <view class="pj-action-wrap" :class="{'pj-action-wrap__show': openPJ}">
          <view class="pj-action-title">
            總評
          </view>
          <view class="pj-action-rate">
            <r-rate value="5" size="60"></r-rate>
          </view> 
          <view class="pj-action-input">
            <c-input type="textarea" placeholder="請填寫您的評論" v-model="pingjia" @confirm="onPingJia"></c-input>
          </view>
        </view>
      </view>
    </view>

    <!-- 留言 -->
    <view class="tabs-content r-flex" v-if="tabCurrent == 2">
      <view class="liuyan r-p-30">
        <view class="ly-header r-border-bottom">
          <r-image width="60" mode="widthFix" src="/static/img/liuyan.png"></r-image>
          <text class="ly-name">留言</text>
          <text class="ly-count">15</text>
        </view>

        <view class="ly-body">
          <!-- item -->
          <view class="ly-item r-p-t-40 r-p-b-40 r-border-bottom">
            <view class="ly-item-img">
              <r-avatar size="60" src="/static/img/head.png"></r-avatar>
            </view>
            <view class="ly-item-content">
              <view class="ly-item-content-info">
                用戶名稱 · 1天前
              </view>
              <view class="ly-item-content-main">
                留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留
              </view>
            </view>
          </view>
          <!-- item -->
          <view class="ly-item r-p-t-40 r-p-b-40 r-border-bottom">
            <view class="ly-item-img">
              <r-avatar size="60" src="/static/img/head.png"></r-avatar>
            </view>
            <view class="ly-item-content">
              <view class="ly-item-content-info">
                用戶名稱 · 1天前
              </view>
              <view class="ly-item-content-main">
                留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留
              </view>
            </view>
          </view>
        </view>

        <view class="ly-input-wrap r-flex r-col-center">
          <view class="ly-head-img">
            <r-avatar size="88" src="/static/img/head.png"></r-avatar>
          </view>
          <view class="ly-input r-flex-1 r-m-l-20">
            <c-input type="text" v-model="liuyan" @confirm="onLY"></c-input>
          </view>
        </view>
      </view>
    </view>

    <!-- notebook -->
    <view class="tabs-content r-flex" v-if="tabCurrent == 3">
      <view class="note r-flex r-flex-col r-col-center">
        <r-image width="313" height="313" src="/static/img/download.png"></r-image>
        <view class="note-tit">
          下載筆記本
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        barStyle: {
          backgroundColor: this.$r.color.base,
          bottom: '-6rpx'
        },
        tabList: [{
          name: '課堂'
        }, {
          name: '評價'
        }, {
          name: '留言'
        }, {
          name: '筆記本'
        }],
        tabCurrent: 0,
        liuyan: '',
        pingjia: '',
        openPJ: false
      };
    },
    methods: {
      tabChange(index) {
        this.tabCurrent = index
      },
      onPingJia(e) {
        console.log(e);
      },
      onLY(e) {
        this.liuyan = ''
        console.log(e);
      },
      onOpenPJ() {
        this.openPJ = !this.openPJ
      }
    }
  }
</script>

<style lang="scss">
  .tabs-content {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  .player {
    width: 100%;
    height: 422rpx;
    background-color: #363538;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .start-action {
      // position: absolute;
      // display: none;

    }
  }
  // 课程头部
  .course-title {
    font-weight: 600;
    font-size: 56rpx;
  }

  .t-info {
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 0 28rpx;

    .t-name {
      font-size: 48rpx;
      margin-left: 10rpx;
      margin-right: 20rpx;
    }
  }
  
  // 课堂
  .course-list {
    padding: 0 10rpx;
    .course-item {
      background-color: #C0C0C0;
      display: flex;
      align-items: center;
      flex: 1;
      height: 274rpx;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
      
      .course-img {
        width: 368rpx;
        height: 207rpx;
        background-color: #363538;
        overflow: hidden;
        margin: 0 12rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .course-info {
        align-self: flex-start;
        font-size: 34rpx;
        font-weight: 600;
        margin-top: 38rpx;
      }
      .course-index {
        color: #686868;
      }
    }
  }

  // 评价
  .pj-total {
    font-size: 50rpx;
    font-weight: 600;
  }

  .pj-body {
    .pj-item {
      font-weight: 600;

      &-content {
        font-size: 38rpx;
      }

      &-info {
        font-size: 32rpx;
      }

      &-name {
        color: #5f6060;
      }

      &-time {
        color: #bcbcbc;
      }

      &-rate {}
    }
  }
  // 评价action
  
  .pj-action {
    &-open {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 50rpx;
      text-align: center;
      font-weight: bold;
      height: 80rpx;
      line-height: 80rpx;
      background-color: #FFFFFF;
      z-index: 33;
    }
    &-wrap {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 80rpx;
      background-color: #FFF;
      padding-left: 30rpx;
      height: 0;
      overflow: hidden;
      transform: translateY(50%);
      transition: transform .3s linear;
      &__show {
        height: auto;
        transform: translateY(0);
      }
    }
    &-title {
      font-size: 50rpx;
      font-weight: bold;
    }
    &-rate {
      margin-top: 10rpx;
    }
    &-input {
      margin-top: 16rpx;
    }
  }

  // 留言 liuyan
  .liuyan {
    .ly-header {
      display: flex;
      align-items: flex-end;
      padding-bottom: 50rpx;

      .ly-name {
        font-size: 46rpx;
        font-weight: 600;
        padding-left: 8rpx;
      }

      .ly-count {
        font-weight: 600;
        padding-left: 10rpx;
        font-size: 40rpx;
        color: #686868;
      }
    }

    .ly-body {}

    .ly-item {
      display: flex;
      position: relative;

      &-img {
        padding-right: 30rpx;
      }

      &-content {
        font-size: 36rpx;

        &-info {
          color: #848585;
          margin-bottom: 20rpx;
        }

        &-main {
          font-weight: 600;
        }
      }
    }

    .ly-input-wrap {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 30rpx;
      background-color: #FFFFFF;
      height: 120rpx;
      z-index: 33;
    }
  }

  // note
  .note {
    margin: 40rpx auto 0;
  }

  .note-tit {
    font-weight: 600;
    font-size: 52rpx;
    margin-top: 20rpx;
  }
</style>
