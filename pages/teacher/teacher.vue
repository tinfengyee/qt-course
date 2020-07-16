<template>
	<view class="teacher">
		<view class="header r-flex r-col-bottom">
		  <view class="t-wrap r-flex r-col-center r-m-r-40">
		    <view class="t-img">
		      <r-avatar size="128" src="/static/img/head.png"></r-avatar>
		    </view>
        <view class="t-info">
          <view class="t-info-header r-flex r-col-center">
            <view class="t-info-name r-m-r-15">
              名稱
            </view>
            <view class="t-info-logo">
              <r-image width="47" src="/static/img/logo_01.png" mode="widthFix"></r-image>
            </view>
          </view>
          <view class="t-info-zhuizhong">
            900 追蹤
          </view>
        </view>
		  </view>
      <c-button fontSize="44" height="62">追蹤</c-button>
		</view>
    <!-- tabs -->
    <view class="tabs">
      <r-tabs :list="tabList" fontSize="50" :bold="false" barWidth="120" :current="tabCurrent" @change="tabChange"
        activeColor="#000000" inactiveColor="#858585" :barStyle="barStyle"></r-tabs>
    </view>
    <!-- tabs-content -->
    <!-- intro -->
    <view class="tabs-content r-p-t-50" v-if="tabCurrent == 0">
      <view class="intro-img">
        <r-image width="750" height="420" :src="img"></r-image>
      </view>
      <view class="intro-name">
        名稱
      </view>
      <view class="intro-content">
        文字文字文字文字文字文字文字文字文字文字文字文字文字文字，文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
      </view>
    </view>
    <!-- kecheng -->
    <view class="tabs-content kecheng r-p-t-50" v-if="tabCurrent == 1">
      <view class="course">
        <c-course col></c-course>
      </view>
      <view class="course">
        <c-course col></c-course>
      </view>
    </view>
    <!-- article -->
    <view class="tabs-content article r-p-t-50" v-if="tabCurrent == 2">
      <r-waterfall v-model="imgList">
        <template v-slot:left="{leftList}">
          <view v-for="(item, index) in leftList" :key="index">
            <view class="article-item" @click="$r.route('pages/article/articleDetail')">
              <c-article :show="false" self :src="item.image"></c-article>
            </view>
          </view>
        </template>
        <template v-slot:right="{rightList}">
          <view v-for="(item, index) in rightList" :key="index">
            <view class="article-item" @click="$r.route('pages/article/articleDetail')">
              <!-- <c-article  :src="item.image"></c-article> -->
              <c-article :show="false" self :src="item.image"></c-article>
            </view>
            <!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
          </view>
        </template>
      </r-waterfall>
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
        tabList: [{
          name: '簡介'
        }, {
          name: '課程'
        }, {
          name: '文章'
        }],
        tabCurrent: 0,
        img: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        imgList: [ {
            image: '../../static/img/test1.png',
            title: 'tests1'
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
              image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
              title: '昨夜星辰昨夜风，画楼西畔桂堂东'
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
          }
        ]
			};
		},
    methods: {
      tabChange(index) {
        this.tabCurrent = index
      }
    }
	}
</script>

<style lang="scss">
.header {
  padding: 48rpx 30rpx;
  .t-info {
    padding-left: 16rpx;
    font-weight: 600;
    &-name {
      font-size: 64rpx;
    }
    &-zhuizhong {
      font-size: 50rpx;
      color: #868585;
      line-height: 1;
      margin-top: 10rpx;
    }
  }
}

// tabs-content
// intro

.intro-name {
  font-size: 58rpx;
  font-weight: 600;
  text-align: center;
  margin-top: 10rpx;
}
.intro-content {
  padding: 20rpx 28rpx;
  font-weight: 600;
  font-size: 36rpx;
  line-height: 50rpx;
}

// kecheng
.kecheng {
  padding: 0 28rpx;
  .course {
    margin-bottom: 36rpx;
  }
}
// article
.article-item {
  padding: 6rpx;
  margin: 6rpx;
}
</style>
