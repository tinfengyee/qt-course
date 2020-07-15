<template>
  <button class="c-btn" :class="[
    'c-btn-size-'+ size,
    'c-btn-color-' + color,
    'c-btn-type-' + type
  ]" @click="onClick" :style="{
    fontSize: fontSize + 'rpx',
    borderRadius: shape=='circle' ? '60rpx' : borderRadius + 'rpx',
    height: height + 'rpx',
    'line-height': height + 'rpx',
    color: color,
    padding: `0 ${padding}rpx`
  }" :size="size">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      shape: {
        type: String,
        default: '' // circle square
      },
      type: {
        type: String,
        default: 'primary' // other
      },
      fontSize: {
        type: [Number, String],
        default: 34
      },
      height: {
        type: [Number, String],
        default: 56
      },
      borderRadius: {
        type: [Number, String],
        default: 16
      },
      size: {
        type: String,
        default: 'mini' // mini
      },
      color: {
        type: String,
        default: '' // white black
      },
      padding: {
        type: [Number, String],
        default: 26
      }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss">
  .c-btn {
    flex: none;
    margin: 0;
    &::after {
      border: none;
    }
    &-size-mini {
      padding: 0 26rpx;
      font-size: 34rpx;
      font-weight: 600;
    }
    &-size-default {
      font-weight: 600;
      padding: 0 26rpx;
      width: auto;
    }
    &-type-primary {
      color: #FFFFFF;
      background-color: $r-type-base-color;
    }
    &-type-other {
      color: #000000;
      background-color: #e5e6e7;
    }
    &-type-plain {
      color: $r-type-base-color;;
      background-color: #FFFFFF;
    }
  }
</style>
