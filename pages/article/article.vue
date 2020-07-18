<template>
  <view class="content">
    <view class="article r-m-b-40 r-p-t-20">
      <view class="article-header r-m-l-20">
        <c-header></c-header>
      </view>
      <view class="article-body r-m-t-10">
        <view class="article-item" @click="$r.route('pages/article/articleDetail')">
          <c-article :src="img" :show="false"></c-article>
        </view>
        <view class="article-item" @click="$r.route('pages/article/articleDetail')">
          <c-article :src="img" :show="false"></c-article>
        </view>
        <view class="article-item" @click="$r.route('pages/article/articleDetail')">
          <c-article :src="img" :show="false"></c-article>
        </view>
        <view class="article-item" @click="$r.route('pages/article/articleDetail')">
          <c-article :src="img" :show="false"></c-article>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        img: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
      };
    }
  }
</script>

<style lang="scss">
  .article {
    .article-header {}

    .article-body {
      display: flex;
      flex-wrap: wrap;
    }

    .article-item {
      padding: 6rpx;
      margin: 6rpx;
      flex: 0 0 47.66%;
    }

    .all-btn {
      border-radius: 50rpx;
      font-size: 34rpx;
      color: #000000;
      background-color: #e5e6e7;
      font-weight: 600;
      line-height: 1.8;

      &::after {
        border: none;
      }
    }
  }
</style>
