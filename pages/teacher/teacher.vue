<template>
	<view class="teacher">
		<view class="header r-flex r-col-bottom">
		  <view class="t-wrap r-flex r-col-center">
		    <view class="t-img">
		      <r-avatar size="128" src="/static/img/head.png"></r-avatar>
		    </view>
        <view class="t-info">
          <view class="t-info-header r-flex r-col-center">
            <view class="t-info-name r-m-r-15">
              名稱
            </view>
            <view class="t-info-logo">
              <r-image width="47" src="/static/img/logo_01.png" mode="widthFix"></r-image>
            </view>
          </view>
          <view class="t-zhuizhong">
            900 追蹤
          </view>
        </view>
		  </view>
      <c-button fontSize="44" height="60">追蹤</c-button>
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

</style>
