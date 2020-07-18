<template>
  <view class="content">
    <view class="add-fav r-flex r-row-center r-col-center" hover-class="r-hover-class" @click="$r.route('/pages/my/favoriteManage', {
      type: 'add'
    })">
      <text class="add-icon">+</text>
      <text>新建收藏夾</text>
    </view>
    <view class="list-cell r-flex r-row-between r-col-center"
       v-for="(item, index) in favList" :key="item.id">
     <view class="cell-left">
        <view class="fav-name">
          {{item.name}}
        </view>
        <view class="fav-count">
          {{item.count}}收藏
        </view>
      </view>
      <view class="cell-right" @click="check(index)">
        <view class="square checkbox" :class="{checked: item.checked}"></view>
      </view>
    </view>
    <view class="bottom-btn">
      <c-button size="default" height="80"  @click="addToFav">提交</c-button>
    </view>
  </view>
</template>
<!-- 郑俊健 -->
<script>
  export default {
    data() {
      return {
        // 选中ids
        ids: [],
        // 收藏夹列表
        favList: [
          {
            id: 1,
            name: '收藏夾名稱1',
            count: 14,
            checked: false
          },
          {
            id: 2,
            name: '收藏夾名稱2',
            count: 15,
            checked: true
          },
          {
            id: 3,
            name: '收藏夾名稱2',
            count: 16,
            checked: false
          }
        ]
      };
    },
    methods: {
      check(index) {
        this.favList[index].checked = !this.favList[index].checked;
      },
      // 收藏夹添加提交
      addToFav() {
        let ids = this.favList.reduce((prev, cur) => {
          if (cur.checked) {
            prev.push(cur.id);
          }
          return prev;
        }, []);
        this.ids = ids;
        let log =  console.log.bind(console);
        log(this.ids)
      }
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #f1eff2;
  }
  .square {
    width: 54rpx;
    height: 54rpx;
    border: 1px solid #000000;
    background-color: #FFFFFF;
    &.checked {
      background-color: $r-type-base-color;
    }
  }
  .content {
    font-weight: 600;
  }
  .add-fav {
    height: 182rpx;
    background-color: #FFFFFF;
    font-size: 58rpx;
    margin-bottom: 20rpx;
  }
  .list-cell {
    height: 182rpx;
    background-color: #FFFFFF;
    margin-bottom: 26rpx;
    padding: 0 56rpx 0 31rpx;
  }
  .fav-name {
    font-size: 50rpx;
  }
  .fav-count {
    color: #686868;
    font-size: 42rpx;
  }
  .bottom-btn {
    position: fixed;
    bottom: 20rpx;
    left: 0;
    right: 0;
    padding: 0 80rpx;
  }
</style>
