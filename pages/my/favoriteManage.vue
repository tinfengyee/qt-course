<template>
	<view class="content">
		<view class="f-input-wrap">
		  <input class="f-input" type="text" v-model="name" placeholder="編輯收藏夾名稱" placeholder-class="input-holder" />
		</view>
    <view class="c-btn r-flex r-row-center r-m-t-50">
      <c-button shape="circle" fontSize="58" height="85">完成</c-button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        name: '',
        type: '' // add || edit
      };
		},
    onLoad(options) {
      let { type } = this.options;
      this.type = type;
    },
    methods: {
      // submit
      async onFormSubmit() {}
    }
	}
</script>

<style lang="scss">
  page {
    background-color: #f1eff2;
  }
  .f-input {
    background-color: #FFFFFF;
    padding: 40rpx;
  }
  .input-holder {
    color: #686868;
    font-size: 50rpx;
    padding: 2rpx;
  }
</style>
