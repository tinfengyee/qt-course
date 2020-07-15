<template>
  <view class="content">
    <view class="course-header">
      <view class="main-text">
        您即將購買此課程：
      </view>
      <view class="course-img r-m-t-50">
        <r-image width="440" height="328" :src="img"></r-image>
      </view>
      <view class="course-title main-text r-m-t-16">
        課程名稱課程名稱課程名稱
      </view>
      <view class="course-t">
        導師名稱
      </view>
      <view class="course-price">
        價格：MYR 60
      </view>
    </view>
    <!-- 表单 -->
    <view class="form r-border-top">
      <view class="main-text">
        用戶詳情:
      </view>
      <view class="form-body">
        <view class="form-item">
          <text class="form-label">姓名：</text>
          <input class="form-input" type="text" v-model="name" />
        </view>
        <view class="form-item">
          <text class="form-label">住址： </text>
          <input class="form-input" type="text" />
        </view>
        <view class="form-item">
          <text class="form-label">電郵： </text>
          <input class="form-input" type="text" />
        </view>
        <view class="form-item">
          <text class="form-label">聯絡號碼： </text>
          <input class="form-input" type="text" />
        </view>
      </view>
    </view>

    <view class="btn r-flex r-row-center r-m-t-60">
      <c-button height="80" fontSize="56" @click="zhifu">支付</c-button>
    </view>

    <view class="bottom-tip r-flex r-flex-col r-col-center">
      <view class="">
        <text class="zhu">注：</text>
        <text class="tip-text">購買課程後，課程將會在課程界面裡的</text>
      </view>
      <view class="">
        “已購課程”。<text class="text-t">學習愉快！</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        img: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        name: ''
      };
    },
    methods: {
      zhifu() {
        console.log(this.name);
      }
    }
  }
</script>

<style lang="scss">
  .main-text {
    font-weight: 600;
    font-size: 50rpx;
  }

  .course-header {
    padding: 40rpx 28rpx 60rpx;
    position: relative;
  }

  .course-t {
    color: #838485;
    font-size: 42rpx;
  }

  .course-price {
    font-weight: 600;
    font-size: 42rpx;
  }

  .form {
    padding: 40rpx 26rpx 0;

    &-item {
      margin-top: 26rpx;
      display: flex;
      align-items: center;
    }

    &-label {
      flex: 1;
      color: #838485;
      font-size: 38rpx;
      font-weight: 600;
    }

    &-input {
      flex: none;
      width: 500rpx;
      height: 62rpx;
      border: 1px solid #303133;
    }
  }
  
  .bottom-tip {
    margin-top: 70rpx;
    padding-bottom: 60rpx;
    font-size: 33rpx;
    font-weight: 600;
    color: #838484;
    .zhu {
      color: #ee2d2b;
    }
    .text-t {
      color: $r-type-base-color;
    }
  }
</style>
