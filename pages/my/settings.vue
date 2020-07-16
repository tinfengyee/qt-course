<template>
	<view class="content">
		<view class="cell" hover-class="r-cell-hover" hover-start-time="50">
      <text class="dot">·</text>
      <text class="tit">關於我們</text>
    </view>
		<view class="cell" hover-class="r-cell-hover" hover-start-time="50"> 
    <text class="dot">·</text>
    <text class="tit">隱私政策</text>
    </view>
		<view class="cell" hover-class="r-cell-hover" hover-start-time="50">
    <text class="dot">·</text>
    <text class="tit">服務条款</text>
    </view>
		<view class="cell" hover-class="r-cell-hover" hover-start-time="50"> 
    <text class="dot">·</text>
    <text class="tit">登出賬號</text>
    </view>
    <view class="version-tip">
      當前版本 1.0.0
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page {
  background-color: #f0f0f0;
  padding-top: 1rpx;
}

.version-tip {
  color: #5A5A5A;
  font-weight: 600;
  font-size: 42rpx;
  position: fixed;
  bottom: 30rpx;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
}

.cell {
  height: 114rpx;
  line-height: 114rpx;
  background-color: #FFFFFF;
  margin-top: 12rpx;
  font-size: 50rpx;
  font-weight: bold;
  .dot {
    font-weight: normal;
    padding: 0 20rpx;
  }
}
</style>
