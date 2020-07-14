<template>
	<view class="content">
		<view class="player">
		</view>
    <view class="header">
      <view class="c-title">
        課程名稱課程名稱課程名稱 課程名稱
      </view>
      <view class="t-wrap r-flex r-row-between r-col-center">
        <view class="t-info r-flex r-col-center">
          <r-avatar size="70" src="/static/img/head.png"></r-avatar>
          <text class="r-p-l-6 r-p-r-8">名稱</text>
          <c-button>導師檔案</c-button>
        </view>
        <view class="share">
          <r-image width="51" mode="widthFix" src="/static/img/share_black.png"></r-image>
          <text class="share-text">分享</text>
        </view>
      </view>
      <!-- 操作区域 -->
      <view class="action-area r-border-top">
        <view class="content-left">
          <view class="c-left">
            <r-image width="94" mode="widthFix" src="/static/img/xuezhe.png"></r-image>
            <view class="c-left-info r-m-l-12">
              <view class="c-left-info__text">
                1000位
              </view>
              <view class="c-left-info__text">
                學者已購買此課程
              </view>
            </view>
          </view>
          <view class="r-rate">
            <r-rate value="5" :disabled="true" activeColor="#ffd103" />(5)
          </view>
        </view>
        <view class="content-right">
          <view class="c-o-price">
            MYR 180
          </view>
          <view class="c-price">
            MYR 90
          </view>
        </view>
      </view>
      <view class="action-btn r-flex r-row-around">
        <c-button height="100" fontSize="56">購買課程</c-button>
        <c-button height="100" fontSize="56">收藏課程</c-button>
      </view>
      <view class="course-contain r-border-bottom">
        <view class="header">
          課程包含 :
        </view>
        <view class="body">
          <view class="content-item r-m-b-50">
           <r-image width="106" src="/static/img/videocount.png" mode="widthFix"></r-image>
           <text>共8支教學 視頻</text>
          </view>
          <view class="content-item r-m-b-50">
           <r-image width="120" src="/static/img/book.png" mode="widthFix"></r-image>
           <text>教學筆記本</text>
          </view>
          <view class="content-item">
           <r-image width="132" src="/static/img/qishivideo.png" mode="widthFix"></r-image>
           <text>70分鐘時長 教學影片</text>
          </view>
          <view class="content-item">
           <r-image width="120" src="/static/img/wushu.png" mode="widthFix"></r-image>
           <text>無數次播放</text>
          </view>
        </view>
      </view>
      <view class="demo">
        ffffffffffffffff
        <!-- #ifdef APP-NVUEf -->
        
        <!-- #endif -->
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
			};
		}
	}
</script>

<style lang="scss">
.player {
  position: relative;
  background-color: #363639;
  height: 442rpx;
}
.c-title {
  font-size: 56rpx;
  padding: 0 18rpx;
  font-weight: 600;
}
// t-wrap start
.t-wrap {
  position: relative;
  padding: 0 20rpx 20rpx;
  .t-info {
    text {
      font-size: 46rpx;
      font-weight: 600;
    }
  }
  .share-text {
    font-weight: 600;
    font-size: 28rpx;
  }
}
// t-wrap end
// 操作区域
.action-area {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20rpx 28rpx 40rpx;
  .c-left {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .content-right {
    text-align: right;
    font-weight: 600;
    .c-o-price {
      color: #666666;
      font-size: 28rpx;
      text-decoration: line-through;
    }
    .c-price {
      font-size: 42rpx;
      color: $r-type-base-color;
    }
    
  }
}
// course-contain
.course-contain {
  margin-top: 70rpx;
  .header {
    height: 96rpx;
    line-height: 96rpx;
    font-weight: 600;
    color: $r-type-base-color;
    font-size: 56rpx;
    background-color: #e7e2e0;
    padding-left: 28rpx;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 8rpx;
      background-color: #b1a4a1;
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 30rpx 20rpx;
    .content-item {
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 32rpx;
      text {
        margin-left: 10rpx;
      }
    }
  }
}
</style>
