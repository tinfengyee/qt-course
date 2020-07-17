<template>
	<view class="tabbar-wrap">
	  <view class="c-tabbar">
	  	<!-- <view class="tab" v-for="item in tabList" :key="item.id">
	  	  <view class="tab-icon">
          <image :src="item.icon" mode="scaleToFill"></image>
	  	  </view>
	      <view class="tab-name">
          {{item.name}}
	      </view>
	  	</view> -->
      <view class="tab" @click="tabChange(0)">
        <view class="tab-icon">
          <r-image width="68" height="42" src="/static/img/tabbar/kecheng.png"></r-image>
        </view>
        <view class="tab-name">
          課程
        </view>
      </view>
      <view class="tab" @click="tabChange(1)">
        <view class="tab-icon">
          <r-image width="35" height="58" src="/static/img/tabbar/home.png"></r-image>
        </view>
        <view class="tab-name">
          首頁
        </view>
      </view>
      <view class="tab" @click="tabChange(2)">
        <view class="tab-icon">
          <r-image width="49" height="56" src="/static/img/tabbar/my.png"></r-image>
        </view>
        <view class="tab-name">
          我的
        </view>
      </view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [
          {
            id: 1,
            icon: '/static/img/tabbar/kecheng.png',
            name: '課程',
            url: '/pages/course/course'
          },
          {
            id: 2,
            icon: '/static/img/tabbar/home.png',
            name: '首頁',
            url: '/pages/home/home'
          },
          {
            id: 3,
            icon: '/static/img/tabbar/my.png',
            name: '我的',
            url: '/pages/my/my'
          }
        ]
			};
		},
    methods: {
      // tabbar 切换
      tabChange(index) {
        let url = this.tabList[index].url
        uni.switchTab({
          url 
        })
      }
    }
	}
</script>

<style lang="scss">
.tabbar-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-tabbar {
  background-color: #FFFFFF;
  width: 500rpx;
  min-height: 120rpx;
  padding: 10rpx 20rpx;
  border-radius: 60rpx;
  box-shadow:0 3rpx 7rpx 0 rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-icon {
      image {
        width: 100%;
        height: 100%;
      }
    }
    &-name {
      margin-top: 4rpx;
      color: $r-type-base-color;
      font-weight: 600;
    }
  }
}
</style>
