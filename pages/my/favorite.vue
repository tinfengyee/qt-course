<template>
  <view class="content">
    <view class="header">
      <text class="fav-name">收藏夾名稱</text>
      <text class="fav-count">7個收藏</text>
    </view>
    <view class="fav-body">
      <view class="fav-item">
        <c-article :show="false"></c-article>
      </view>
      <view class="fav-item">
        <c-article :show="false"></c-article>
      </view>
      <view class="fav-item">
        <c-article :show="false"></c-article>
      </view>
      <view class="fav-item">
        <c-article :show="false"></c-article>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: '收藏夾名稱'
      })
    }
  }
</script>

<style lang="scss">
.header {
  font-weight: 600;
  padding-top: 50rpx;
  margin-left: 28rpx;
  .fav-name {
    font-size: 50rpx;
  }
  .fav-count {
    padding-left: 24rpx;
    font-size: 32rpx;
    color: #928f92;
  }
}

// body
.fav-body {
  display: flex;
  flex-wrap: wrap;
  .fav-item {
    flex: 0 0 50%;
    margin-top: 24rpx;
  }
}
</style>
