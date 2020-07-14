<template>
	<view class="content">
		<view class="player">
		</view>
    <view class="header">
      <view class="c-title">
        課程名稱課程名稱課程名稱 課程名稱
      </view>
      <view class="t-wrap r-flex r-row-between r-col-center">
        <view class="t-info r-flex r-col-center">
          <r-avatar size="70" src="/static/img/head.png"></r-avatar>
          <text class="r-p-l-6 r-p-r-8">名稱</text>
          <c-button>導師檔案</c-button>
        </view>
        <view class="share">
          <r-image width="51" mode="widthFix" src="/static/img/share_black.png"></r-image>
          <text>分享</text>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
			};
		}
	}
</script>

<style lang="scss">
.player {
  position: relative;
  background-color: #363639;
  height: 442rpx;
}
.c-title {
  font-size: 56rpx;
  padding: 0 18rpx;
  font-weight: 600;
}
.t-wrap {
  padding: 0 20rpx;
  .t-info {
    text {
      font-size: 46rpx;
      font-weight: 600;
    }
  }
}
</style>
