<template>
  <view class="c-header">
    <view class="head-img r-m-r-8">
      <r-image width="78" height="78" shape="circle" :src="head"></r-image>
    </view>
    <view class="content">
      <view class="header-content">
        <text class="title r-m-r-10" :style="{
          fontSize: fontSize + 'rpx'
        }">{{title}}</text>
        <r-image width="46" height="46" :src="logo"></r-image>
      </view>
      <view class="time r-m-t-6" v-if="showTime">
        <text>01-09-2020</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      head: {
        type: String,
        default: '/static/img/head.png'
      },
      title: {
        type: String,
        default: '名稱'
      },
      fontSize: {
        type: [String, Number],
        default: 56
      },
      logo: {
        type: String,
        default: '/static/img/logo_01.png'
      },
      showTime: {
        type: Boolean,
        default: false
      },
      row: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .c-header {
    display: flex;
    align-items: center;
    
  }
  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .header-content {
    display: flex;
    align-items: flex-end;
  }
  .title {
    line-height: 1;
  }
  .time {
    font-size: 34rpx;
    font-weight: 600;
    color: #676868;
  }
</style>
