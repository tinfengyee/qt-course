<template>
  <view class="c-section">
    <r-section>
      <view class="c-section-title" :style="{
        paddingLeft: `${paddingLeft}rpx`,
        borderRadius: circle ? `${radius}rpx` : 0
        }" slot="title">
        名稱
      </view>
      <view class="c-right-all" slot="right" @tap="rightClick">
        所有課程
      </view>
    </r-section>
  </view>
</template>

<script>
  export default {
    name: 'c-section',
    props: {
      // 标题信息
      title: {
        type: String,
        default: ''
      },
      rText: {
        type: String,
        default: ''
      },
      paddingLeft: {
        type: [String, Number],
        default: 20
      },
      // cir，square
      circle: {
        type: Boolean,
        default: true
      },
      radius: {
        type: [String, Number],
        default: 20
      }
    },
    methods: {
      rightClick() {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="scss">
  .c-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .c-section-title {
    color: $r-white;
    background-color: $r-type-base-color;
    font-weight: bold;
    font-size: 56rpx;
    padding: 2rpx 20rpx;
  }

  .c-right-all {
    color: $r-black;
    background-color: $r-gray;
    font-size: 34rpx;
    height: 56rpx;
    line-height: 56rpx;
    padding: 0 20rpx;
    border-radius: 50rpx;
  }
</style>
