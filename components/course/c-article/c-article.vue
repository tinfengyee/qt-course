<template>
  <view class="c-article-item" :style="articleStyle">
    <view class="article-image">
      <block v-if="self">
        <r-image width="350" mode="widthFix" :src="src" borderRadius="20"></r-image>
      </block>
      <block v-else>
        <!-- 判断有点多, 加着加着就乱写了 -->
        <r-image v-if="row" width="324" height="240" mode="aspectFill" :src="src" borderRadius="20"></r-image>
        <r-image v-if="!row && !show" width="350" height="260" mode="aspectFill" :src="src" borderRadius="20"></r-image>
        <r-image v-if="!row && show" width="350" mode="widthFix" :src="src" borderRadius="20"></r-image>
      </block>
    </view>
    <view class="content-box r-m-l-8">
      <view class="user-info r-m-t-10" v-if="show">
        <r-avatar class="avatar" :src="headImg" size="45"></r-avatar>
        <text class="name r-m-l-8">{{name}}</text>
      </view>
      <view class="count-box r-m-t-10" v-if="show" :style="{ order: row ? '5' : '2' }">
        <text>10點讚</text>
        <text>5收藏</text>
      </view>
      <view class="title r-line-2 r-m-t-10">
        {{title}}
      </view>
      <view class="count-box r-m-t-2" v-if="!show && self" :style="{ order: 5 }">
        <text>10點讚</text>
        <text>5收藏</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: 'https://cdn.uviewui.com/uview/example/fade.jpg'
      },
      headImg: {
        default: '/static/img/head.png'
      },
      name: {
        type: String,
        default: '名稱'
      },
      zan: {
        type: [String, Number],
        default: '0'
      },
      collection: {
        type: [String, Number],
        default: '0'
      },
      title: {
        type: String,
        default: '文章標題文章標題文章文章標題。'
      },
      row: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: true
      },
      // 导师个人页面文章
      self: { 
        type: Boolean,
        default: false
      }

    },
    data() {
      return {

      };
    },
    computed: {
      articleStyle() {
        let style = '';
        if (this.row) {
          style += 'display: flex;align-items: center;'
        }
        return style;
      }
    },
    mounted() {
      console.log(this.articleStyle);
    }
  }
</script>

<style lang="scss">
  .c-article-item {
    flex: 1;
    // display: flex;
    // align-items: center;
    
  }
  .article-image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-box {
    display: flex;
    flex-wrap: wrap;
    font-size: 33rpx;
    font-weight: 600;
  }
  .user-info {
    order: 1;
    display: flex;
    align-items: center;
    flex: 1;
  }
  .count-box {
    color: #858585;
    font-size: 26rpx;
    order: 2;
    // order: 5;
    display: flex;
    align-items: flex-end;
  }
  .title {
    order: 3;
    width: 100%;
  }
</style>
