<template>
	<view class="content">
		<view class="search r-padding-10">
		  <r-search searchIcon="/static/img/search.png" :showAction="false" :disabled="true"></r-search>
		</view>
    <view class="banner">
      <r-swiper height="442" :list="imgList"></r-swiper>
    </view>
    <view class="navs r-m-t-20">
      <view class="navs-item tui">
        推薦課程
      </view>
      <view class="navs-item">
        收藏課程
      </view>
      <view class="navs-item">
        已購課程
      </view>
    </view>
    <view class="hot r-p-t-50 r-rela">
      <view class="course">
        <!-- 课程 -->
        <view class="course-item r-p-l-20 r-p-b-60">
          <view class="r-m-r-20">
            <c-section title="名稱"></c-section>
          </view>
          <view class="course-content r-m-t-30">
            <scroll-view class="scroll-view_h" enable-flex scroll-x="true" @scroll="scroll" @scrolltolower="scrolltolower" scroll-left="120">
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
            </scroll-view>
          </view>
        </view>
        <!-- 课程 -->
        <view class="course-item r-p-l-20  r-p-b-60">
          <view class="r-m-r-20">
            <c-section title="名稱"></c-section>
          </view>
          <view class="course-content r-m-t-30">
            <scroll-view class="scroll-view_h" enable-flex scroll-x="true" @scroll="scroll" @scrolltolower="scrolltolower" scroll-left="120">
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
              <view class="scroll-course-item">
                <c-course></c-course>
              </view>
            </scroll-view>
          </view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				  }
				],
			};
		},
    methods: {
      scroll(e) {
        // console.log(e);
      },
      scrolltolower(e) {
        console.log(e);
      }
    }
	}
</script>

<style lang="scss">
.navs {
  display: flex;
  justify-content: space-around;
  &-item {
    font-size: 44rpx;
    color: #858585;
    font-weight: 600;
    &.tui {
      color: #000000;
    }
  }
}

.scroll-view_h {
  overflow: hidden;
  white-space: nowrap;
  // white-space: nowrap;
  width: 100%;
  
  .scroll-course-item {
    width: 324rpx;
    margin-right: 20rpx;
    display: inline-block;

  }
}
</style>
