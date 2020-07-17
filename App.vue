<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
  @import "rview-ui/index.scss";
  @import 'static/css/common.scss';
	.tabbar {
	  position: fixed;
	  left: 0;
	  right: 0;
	  bottom:50rpx;
	  z-index: 66;
	}
</style>
