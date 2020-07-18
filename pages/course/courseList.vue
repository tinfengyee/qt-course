<template>
	<view class="content">
		<view class="course-wrap r-p-16">
		  <view class="course r-flex r-col-center r-m-b-24">
		    <view class="c-course-item">
		      <c-course width="274" height="202" col tName="老师名称"></c-course>
		    </view>
		    <c-button>購買</c-button>
		  </view>
      <view class="course r-flex r-col-center r-m-b-24">
        <view class="c-course-item">
          <c-course width="274" height="202" col tName="老师名称"></c-course>
        </view>
        <c-button>購買</c-button>
      </view>
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
.c-course-item {
  width: 600rpx;
}
</style>
