<template>
  <view class="content">
    <view class="search r-padding-10">
      <r-search searchIcon="/static/img/search.png" :showAction="false" :disabled="true"></r-search>
    </view>
    <view class="banner">
      <r-swiper height="442" :list="imgList"></r-swiper>
    </view>
    <view class="tabs">
      <r-tabs :list="tabList" fontSize="58" :bold="false" barWidth="140" :current="tabCurrent" @change="tabChange"
        activeColor="#000000" inactiveColor="#858585" :barStyle="barStyle"></r-tabs>
    </view>
    <view v-if="tabCurrent == 0" class="content-body">
      <r-waterfall v-model="imgList">
        <template v-slot:left="{leftList}">
          <view v-for="(item, index) in leftList" :key="index">
            <view class="article-item">
              <c-article :src="item.image"></c-article>
            </view>
          </view>
        </template>
        <template v-slot:right="{rightList}">
          <view v-for="(item, index) in rightList" :key="index">
            <view class="article-item">
              <c-article :src="item.image"></c-article>
            </view>
            <!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
          </view>
        </template>
      </r-waterfall>
    </view>
    <view class="content-body track" v-if="tabCurrent == 1">
      <view class="article-header">
        <c-header></c-header>
      </view>
      <view class="article-body">
        <view class="article-item">
            <c-article :src="img" :show="false"></c-article>
          </view>
          <view class="article-item">
            <c-article :src="img" :show="false"></c-article>
          </view>
          <view class="article-item">
            <c-article :src="img" :show="false"></c-article>
          </view>
          <view class="article-item">
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
        barStyle: {
          backgroundColor: this.$r.color.base,
          bottom: '-6rpx'
        },
        img: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        imgList: [{
            image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
            title: '昨夜星辰昨夜风，画楼西畔桂堂东'
          }, {
            image: '../../static/img/test1.png',
            title: 'tests1'
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
            title: '身无彩凤双飞翼，心有灵犀一点通'
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
            title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
          }, ////////////////
          {
            image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
            title: '昨夜星辰昨夜风，画楼西畔桂堂东'
          }, {
            image: '../../static/img/test1.png',
            title: 'tests1'
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
            title: '身无彩凤双飞翼，心有灵犀一点通'
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
            title: '昨夜星辰昨夜风，画楼西畔桂堂东'
          }, {
            image: '../../static/img/test1.png',
            title: 'tests1'
          },
          {
            image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
            title: '身无彩凤双飞翼，心有灵犀一点通'
          },
        ],
        tabList: [{
          name: '推薦'
        }, {
          name: '追蹤'
        }],
        tabCurrent: 0
      };
    },
    onLoad() {
      console.log(this.$r.color.base);
    },
    methods: {
      tabChange(index) {
        this.tabCurrent = index
      }
    }
  }
</script>

<style lang="scss">
  .article-item {
    padding: 6rpx;
    margin: 6rpx;
  }
  .content-body {
    margin-top: 24rpx;
  }
  .track {
    .article-header {
      
    }
    .article-body {
      display: flex;
      flex-wrap: wrap;
    }
    .article-item {
      flex: 0 0 47.66%;
    }
  }
</style>
