<template>
  <view class="c-input" @tap.stop="inputClick">
    <textarea v-if="type == 'textarea'" class="c-input__input c-input__textarea" :value="value" :placeholder="placeholder"
      :placeholderStyle="placeholderStyle" :disabled="disabled" :maxlength="inputMaxlength" :fixed="fixed" :autoHeight="autoHeight"
      @input="handleInput" @confirm="onConfirm" />
    <input
    			v-else
    			class="c-input__input"
    			:type="type == 'password' ? 'text' : type"
    			:value="defaultValue"
    			:placeholder="placeholder"
          placeholder-class="holder-class"
    			:disabled="disabled || type === 'select'"
    			:maxlength="inputMaxlength"
    			:confirmType="confirmType"
    			@input="handleInput"
    			@confirm="onConfirm"
    		/>
  </view>
</template>

<script>
  export default {
    name: 'c-input',
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      // 输入框的类型，textarea，text，number
      type: {
        type: String,
        default: 'text'
      },
      maxlength: {
        type: [Number, String],
        default: 140,
      },
      border: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: '寫下您的留言.....'
      },
      // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
      fixed: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoHeight: {
      	type: Boolean,
      	default: true
      },
          
      placeholderStyle: {
        type: String,
        default: 'color: #000000;'
      },
      confirmType: {
      	type: String,
      	default: 'done'
      },
    },
    data() {
      return {
        defaultValue: this.value,
      };
    },
    computed: {
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
       }
    },
    watch: {
      value(nVal, oVal) {
        this.defaultValue = nVal;
        // 当值发生变化，且为select类型时(此时input被设置为disabled，不会触发@input事件)，模拟触发@input事件
      	if(nVal != oVal && this.type == 'select') this.handleInput({
          detail: {
            value: nVal,
            },
          })
      },
    },
    methods: {
      handleInput(event) {
        // 当前model 赋值
      	this.defaultValue = event.detail.value;
      	// vue 原生的方法 return 出去
      	this.$emit('input', event.detail.value);
      },
      onConfirm(e) {
        this.$emit('confirm', e.detail.value);
      },
      inputClick() {
      	this.$emit('click');
      }
    }
  }
</script>

<style lang="scss">
  .c-input {
    &__input {
      font-weight: 600;
      border-radius: 20rpx;
      padding: 20rpx;
      background-color: #ccced0;
    }
  }
  .holder-class {
    color: #000000;
    font-weight: 600;
    font-size: 36rpx;
  }
</style>
