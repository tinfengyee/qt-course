<template>
  <view class="content">
    <!-- 背景 -->
    <view class="bg">
      <image src="/static/img/bg.png"></image>
    </view>
    <view class="body">
      <view class="logo">
        <image src="../../static/img/logo@2x.png" mode="widthFix"></image>
      </view>
      <!-- 提示区域 -->
      <view class="tips">
        <view class="tips-title">
          重置密碼
        </view>
        <view class="tips-content">
          請輸入您登錄Learner的電子郵件， 我們會把重置鏈接發到您的電子郵件。
        </view>
      </view>
      <!-- 表单 -->
      <view class="form">
        <view class="form-item">
          <view class="f-label">
            電子郵件：
          </view>
          <input class="f-input" type="text" />
        </view>
      </view>
      <!-- 操作区域 -->
  
      <view class="login-btn r-m-t-16">
        <c-button size="mini" fontSize="70" shape="circle" height="88" padding="70">重置</c-button>
      </view>
    </view>
  
    <!-- 学者 -->
    <view class="xz__logo">
      <r-image width="96" src="/static/img/xzLogo@2x.png" mode="widthFix"></r-image>
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
  .content {
    padding-top: 36rpx;
    padding-bottom: 100rpx;
  }
  // bg
  .bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;

    image {
      width: 100%;
      height: 100%;
    }
  }
   // logo
  .logo {
    align-self: center;

    image {
      width: 110rpx;
    }
  }

  // body
  .body {
    margin: 0 auto;
    background-color: #FFFFFF;
    padding-bottom: 20rpx;
    width: 688rpx;
    padding-top: 44rpx;
    display: flex;
    flex-direction: column;
    border-radius: 20rpx;
    // border-bottom-left-radius: 0;
    // border-bottom-right-radius: 0;
    position: relative;
    filter: drop-shadow(5px 5px 10px black);
    // 注释是对角线, 但是有问题
    
    // &::after {
    //   position: absolute;
    //   content: '';
    //   bottom: -100%;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   border-radius: 20rpx;
    //   border-top-left-radius: 0;
    //   border-top-right-radius: 0;
    //   background: linear-gradient(to right top, transparent 0%, transparent 49%, rgba(0, 0, 0, .1) 49.9%, #FFFFFF 50%, #FFFFFF 100%);
    //   z-index: -1;
    // }
  }

  // form
  .form {
    display: flex;
    flex-direction: column;
    padding: 0 20rpx;
    font-weight: 600;
    margin-top: 60rpx;
    margin-bottom: 60rpx;
    &-item {
      background-color: #fefcfd;
      border-radius: 14rpx;
      box-shadow: 1px 4rpx 5rpx rgba(0, 0, 0, .5);
      padding-top: 12rpx;
      padding-left: 18rpx;
      font-size: 32rpx;
      color: #3D3D3D;
      margin-top: 20rpx;
      .f-input {
        padding: 10rpx 20rpx;
      }
    }
  }
  
  // action-area
  .login-btn {
    align-self: flex-end;
    padding-right: 40rpx;
  }
  // 学者logo
  .xz__logo {
    position: fixed;
    bottom: 30rpx;
    left: 80rpx;
  }
  .tips {
    align-self: center;
    text-align: center;
    padding: 0 68rpx;
    font-weight: 600;
    &-title {
      font-size: 72rpx;
    }
    &-content {
      margin-top: 10rpx;
      font-size: 33rpx;
    }
  }
</style>
