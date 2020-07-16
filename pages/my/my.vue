<template>
  <view class="content">
    <view class="header r-flex r-row-between r-col-center">
      <view class="user-info r-flex r-col-center">
        <r-avatar size="83" src="/static/img/head.png"></r-avatar>
        <text class="user-name">名稱</text>
      </view>
      <view class="settings r-p-r-20" @click="$r.route('pages/my/settings')">
        <r-image width="72" src="/static/img/settings.png" mode="widthFix"></r-image>
      </view>
    </view>
    <!-- tabs -->
    <view class="tabs">
      <r-tabs :list="tabList" fontSize="58" :bold="false" barWidth="120" gutter="28" :current="tabCurrent" @change="tabChange"
        activeColor="#000000" inactiveColor="#858585" :barStyle="barStyle"></r-tabs>
    </view>
    <!-- collection收藏 -->
    <view class="collection-wrap r-m-t-50">
      <view class="collection-item">
        <view class="collection">
          <view class="collection-img">
            <r-image width="350" height="259" :src="img"></r-image>
          </view>
          <view class="collection-action r-flex r-col-center r-row-between">
            <view class="collection-name">
              收藏夾名稱
            </view>
            <view class="collection-btn">
              <view class="circle_dot_list">
                <view class="circle_dot r-m-r-4"></view>
                <view class="circle_dot r-m-r-4"></view>
                <view class="circle_dot"></view>
              </view>
            </view>
          </view>
          <view class="collection-count">
            12個收藏
          </view>
        </view>
      </view>
      <view class="collection-item">
        <view class="collection">
          <view class="collection-img">
            <r-image width="350" height="259" :src="img"></r-image>
          </view>
          <view class="collection-action r-flex r-col-center r-row-between">
            <view class="collection-name">
              收藏夾名稱
            </view>
            <view class="collection-btn">
              <view class="circle_dot_list">
                <view class="circle_dot r-m-r-4"></view>
                <view class="circle_dot r-m-r-4"></view>
                <view class="circle_dot"></view>
              </view>
            </view>
          </view>
          <view class="collection-count">
            12個收藏
          </view>
        </view>
      </view>
      <view class="collection-item">
        <view class="collection">
          <view class="collection-img">
            <r-image width="350" height="259" :src="img"></r-image>
          </view>
          <view class="collection-action r-flex r-col-center r-row-between">
            <view class="collection-name">
              收藏夾名稱
            </view>
            <view class="collection-btn">
              <view class="circle_dot_list">
                <view class="circle_dot r-m-r-4"></view>
                <view class="circle_dot r-m-r-4"></view>
                <view class="circle_dot"></view>
              </view>
            </view>
          </view>
          <view class="collection-count">
            12個收藏
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        img: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        barStyle: {
          backgroundColor: this.$r.color.base,
          bottom: '-6rpx'
        },
        tabList: [{
          name: '收藏'
        }],
        tabCurrent: 0
      };
    }
  }
</script>

<style lang="scss">
  .content {
    // padding: 56rpx 26rpx 0;
  }

  // 圆点
  .circle_dot_list {
    display: flex;
    align-items: center;
    padding: 20rpx;
  }

  .circle_dot {
    width: 10rpx;
    height: 10rpx;
    background-color: #000000;
    border-radius: 50%;
  }
  
  // Header
  .header {
    padding: 56rpx 26rpx 50rpx;

    .user-name {
      font-size: 68rpx;
      font-weight: 600;
      padding-left: 16rpx;
    }
  }
  
  .collection-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .collection-item {
    flex: 0 0 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 26rpx;
  }
  .collection {
    font-weight: 600;
    &-img {
      border-radius: 16rpx;
      overflow: hidden;
    }
    &-name {
      font-size: 34rpx;
    }
    &-count {
      font-size: 25rpx;
      color: #989797;
    }
  }
</style>
