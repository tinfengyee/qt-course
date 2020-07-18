<template>
	<view class="content">
		<view class="bg">
      <image src="/static/img/bg.png"></image>
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
  page,
  .content {
    position: relative;
    height: 100%;
  }
  .bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    image {
      width: 100%;
      height: 100%;
    }
  }
</style>
