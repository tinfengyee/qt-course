<template>
	<view class="article">
    <view class="article-image">
      <r-image width="750" height="420" :src="img"></r-image>
    </view>
		<view class="header r-flex r-row-between r-col-center">
		  <view class="">
		    <c-header showTime></c-header>
		  </view>
      <c-button>追蹤</c-button>
		</view>
    <view class="article-title r-p-30">
      文章標題文章標題文章標題 文章標題。
    </view>
   <view class="rich-content r-p-30">
     2020年的一場疫情，讓很多人都知道了存款的重要性，如果沒有存款在意外來臨之際生存都可能成問題，所以即使在一季度疫情最嚴重的時
     2020年的一場疫情，讓很多人都知道了存款的重要性，如果沒有存款在意外來臨之際生存都可能成問題，所以即使在一季度疫情最嚴重的時
     2020年的一場疫情，讓很多人都知道了存款的重要性，如果沒有存款在意外來臨之際生存都可能成問題，所以即使在一季度疫情最嚴重的時
     2020年的一場疫情，讓很多人都知道了存款的重要性，如果沒有存款在意外來臨之際生存都可能成問題，所以即使在一季度疫情最嚴重的時
     2020年的一場疫情，讓很多人都知道了存款的重要性，如果沒有存款在意外來臨之際生存都可能成問題，所以即使在一季度疫情最嚴重的時
     2020年的一場疫情，讓很多人都知道了存款的重要性，如果沒有存款在意外來臨之際生存都可能成問題，所以即使在一季度疫情最嚴重的時
   </view>
   <!-- 留言 -->
   <view class="liuyan r-p-30 r-rela r-border-top">
     <view class="ly-header">
       <view class="ly-title">
         <r-image width="60" mode="widthFix" src="/static/img/liuyan.png"></r-image>
         <text class="ly-name">留言</text>
         <text class="ly-count">15</text>
       </view>
       <view class="ly-all" @click="openLy">
         <text class="ly-all-t">所有留言</text>
         <view class="ly-all-arrow" :class="{
           'ly-all-arrow_roate': open
         }">></view>
       </view>
     </view>
     <view class="input-wrap r-flex r-col-center r-m-t-16 r-p-b-40">
       <view class="ly-head-img">
         <r-avatar size="88" src="/static/img/head.png"></r-avatar>
       </view>
       <view class="ly-input r-flex-1 r-m-l-20">
         <c-input type="text" v-model="value"></c-input>
       </view>
     </view>
     <view class="ly-body" :class="{'ly-body_show': open}">
       <view class="ly-bg" :class="{'ly-bg_show': open}">
         <view class="ly-item r-border-top r-p-t-40 r-p-b-40">
           <view class="ly-item-img">
             <r-avatar size="60" src="/static/img/head.png"></r-avatar>
           </view>
           <view class="ly-item-content">
             <view class="ly-item-content-info">
               用戶名稱 · 1天前
             </view>
             <view class="ly-item-content-main">
               留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留
             </view>
           </view>
         </view>
       </view>
      <view class="ly-bg" :class="{'ly-bg_show': open}">
        <view class="ly-item r-border-top r-p-t-40 r-p-b-40">
          <view class="ly-item-img">
            <r-avatar size="60" src="/static/img/head.png"></r-avatar>
          </view>
          <view class="ly-item-content">
            <view class="ly-item-content-info">
              用戶名稱 · 1天前
            </view>
            <view class="ly-item-content-main">
              留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留 留言留言留言留言留言留言留
            </view>
          </view>
        </view>
      </view>
     </view>
   </view>
   <!-- 您可能也喜歡： -->
   <view class="like r-m-t-40 r-p-b-30 r-border-bottom r-border-top r-p-t-40">
     <text class="main-text">
       您可能也喜歡：
     </text>
     <view class="article-body r-padding-20">
       <view class="article-item r-m-t-10">
         <c-article row="" :src="img"></c-article>
       </view>
       <view class="article-item r-m-t-10">
         <c-article row="" :src="img"></c-article>
       </view>
       <view class="article-item r-m-t-10">
         <c-article row="" :src="img"></c-article>
       </view>
       <view class="article-item r-m-t-10">
         <c-article row="" :src="img"></c-article>
       </view>
     </view>
     <view class="all-btn r-flex r-row-center r-m-t-40">
       <c-button size="mini">查看全部</c-button>
     </view>
   </view>
   <!-- 热门课程 -->
   
   <view class="hot r-p-t-50 r-rela">
     <text class="main-text">熱門課程：</text>
     <view class="course  r-m-t-60">
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
   
   <!-- bottom action -->
   <view class="article-bottom r-flex r-col-center r-row-between">
     <view class="arrow r-m-l-28" @click="goBack">
       <r-image width="30" src="/static/img/arrow-left.png" mode="widthFix"></r-image>
     </view>
     <view class="action-wrap r-flex">
       <view class="action-item r-m-r-28">
         <r-image width="47" mode="widthFix" src="/static/img/xin.png"></r-image>
         <text class="action-text">點讚</text>
       </view>
       <view class="action-item r-m-r-28">
         <r-image width="43" mode="widthFix" src="/static/img/start.png"></r-image>
         <text class="action-text">收藏</text>
       </view>
       <view class="action-item r-m-r-28">
         <r-image :fade="false" width="42" mode="widthFix" src="/static/img/share.png"></r-image>
         <text class="action-text">分享</text>
       </view>
     </view>
   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: 'https://cdn.uviewui.com/uview/example/fade.jpg',
        value: '',
        open: false
			};
		},
    methods: {
      openLy() {
        this.open = !this.open
        console.log(this.open);
      },
      onClick() {
        console.log(this.value);
      },
      scroll(e) {
        // console.log(e);
      },
      scrolltolower(e) {
        console.log(e);
      },
      goBack() {
        uni.navigateBack({})
      }
    }
	}
</script>

<style lang="scss">
 .main-text {
   color: #FFFFFF;
   font-size: 56rpx;
   padding-left: 10rpx;
   background-color: $r-type-base-color;
 }
.header {
  padding: 20rpx 30rpx;
}
.article {
  position: relative;
  padding-bottom: 110rpx;
}
.article-title {
  font-size: 56rpx;
  font-weight: 600;
}
.rich-content {
}
.article-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100rpx;
  z-index: 11;
  background-color: $r-type-base-color;
  .action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text {
      color: #FFFFFF;
      font-size: 22rpx;
    }
  }
}

.liuyan {
  .ly-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .ly-title {
      display: flex;
      align-items: flex-end;
    }
    .ly-name {
      font-size: 46rpx;
      font-weight: 600;
      padding-left: 8rpx;
    }
    .ly-count {
      font-weight: 600;
      padding-left: 10rpx;
      font-size: 40rpx;
      color: #686868;
    }
    .ly-all {
      display: flex;
      align-items: flex-end;
    }
    .ly-all-t {
      font-size: 34rpx;
      font-weight: 600;
    }
    .ly-all-arrow {
      font-size: 50rpx;
      transform: rotate(90deg) translateX(7px);
      transition: transform .1s linear;
    }
    .ly-all-arrow_roate {
      transform: rotate(-90deg) translateX(-7px);
    }
  }
  .ly-body {
    height: 0;
    overflow: hidden;
    transition: transform .3s ease-in;
  }
  .ly-body_show {
    height: auto;
  }
  .ly-bg {
    opacity: 0;
    transform: translateY(-50%);
    transition: 0.3s;
  }
  .ly-bg_show {
    opacity: 1;
    transform: translateY(0);
  }
  .ly-item {
    display: flex;
    position: relative;
    &-img {
      padding-right: 30rpx;
    }
    &-content {
      font-size: 36rpx;
      &-info {
        color: #848585;
        margin-bottom: 20rpx;
      }
      &-main {
        font-weight: 600;
      }
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
