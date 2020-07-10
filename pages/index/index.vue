<template>
  <view class="content">
    <view class="text-area">
      <r-icon name="gift-fill"></r-icon>
      <r-image width="200" height="200" shape="circle" src="https://cdn.eso.org/images/screen/eso1242a.jpg"></r-image>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        now: Date.now()
      }
    },
    onLoad() {
      this.$http.get('products').then(res => {
        console.log(res);
        console.log(this.timeFormat);
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
    border-width: 6px !important;
    color: #007AFF;

    &.r-border::after {
      border-width: 30rpx;
    }
  }
</style>
