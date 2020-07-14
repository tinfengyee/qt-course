<template>
  <view class="content">
    <view class="course r-p-16">
      <view class="c-course-item r-m-b-24">
        <c-course width="274" height="202" col tName="老师名称" :showRate="false" :showPrice="false"></c-course>
      </view>
      <view class="c-course-item r-m-b-24">
        <c-course width="274" height="202" col tName="老师名称" :showRate="false" :showPrice="false"></c-course>
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
    width: 650rpx;
  }
</style>
