<template>
	<view class="c-course" :class="{
    'r-flex': col,
    'r-col-center': col
  }">
		<view class="c-course-image">
		  <r-image :width="width" :height="height" borderRadius="20" :src="src"></r-image>
		</view>
    <view class="course-content r-p-l-4" :class="{
      'r-p-l-10': col
    }">
      <view class="course-title r-flex r-flex-col r-line-2">
        課程名稱課程名稱課程名課程名
      </view>
      <text class="course-bm" v-if="showBm">{{bm}}位學者已報名</text>
      <view class="r-rate r-m-t-2" v-if="showRate">
        <r-rate :value="rateValue" :disabled="true" :size="rateSize" activeColor="#ffd103"></r-rate>
        <text class="rate-text">{{rateValue}}(10)</text>
      </view>
      <text class="t-name" v-if="tName">老師名稱</text>
      <view class="course-price r-p-l-4" v-if="showPrice">
        <text class="course-price__price">MYR {{price}}</text>
        <text class="course-price__old" v-if="oldPrice">MYR {{oldPrice}}</text>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
    props: {
      col: {
        type: Boolean,
        default: false
      },
      src: {
        type: String,
        default: 'https://cdn.uviewui.com/uview/example/fade.jpg'
      },
      title: {
        type: String,
        default: ''
      },
      // 教师
      tName: {
        type: String,
        default: ''
      },
      // 报名数量
      bm: {
        type: [String, Number],
        default: 0
      },
      showRate: {
        type: Boolean,
        default: true
      },
      showPrice: {
        type: Boolean,
        default: true
      },
      showBm: {
        type: Boolean,
        default: false
      },
      rateValue: {
        type: [String, Number],
        default: 0
      },
      rateSize: {
        type: [String, Number],
        default: 32
      },
      price: {
        type: [String, Number],
        default: 0
      },
      oldPrice: {
        type: [String, Number],
        default: 1
      },
      width: {
        type: [String, Number],
        default: 324
      },
      height: {
        type: [String, Number],
        default: 240
      }
    },
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.course {
  &-title {
    font-size: 33rpx;
    font-weight: 600;
    white-space: normal;
    // display: block;
    // display: flex;
    // flex-wrap: wrap;
  }
  &-bm {
    font-size: 32rpx;
    color: #686868;
    font-weight: 600;
  }
  &-price {
    font-weight: 600;
    font-size: 32rpx;
    &__old {
      font-size: 24rpx;
      margin-left: 18rpx;
      color: #686868;
      text-decoration: line-through;
    }
  }
}
.rate-text {
  padding-left: 4rpx;
  font-weight: 600;
  color: #686868;
}
</style>
