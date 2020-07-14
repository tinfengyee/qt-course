<template>
  <view class="content">
    <view class="" @click="$r.route({
      url: 'pages/home/home',
      type: 'switchTab'
    })">
      跳转HOME
    </view>
    <view class="" @click="$r.route({url: 'pages/home/home'})">
      跳转HOME
    </view>
    
    <view class="" @click="$r.route({
      url: 'pages/home/home',
      type: 'switchTab'
    })">
      跳转HOME
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        now: Date.now(),
        list: [{
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
          }
        ],
      }
    },
    onLoad() {
      // uni.hideTabBar({})
      this.$http.get('products').then(res => {
        console.log(res);
        console.log(this.timeFormat);
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss">
</style>
