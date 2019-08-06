<template>

  <div id="search">
    <component class="vkb" ref='J9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/> 
    <component class="vkb1" ref='T9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/>
    <component class="vkb2" ref='ABCKeyboardRef' :is="keyboardMode" @ABC="$emit('ABC')" @left="$emit('left')"/> 
  </div>

</template>

<script>
import J9Keyboard from './keyboards/J9Keyboard';
import T9Keyboard from './keyboards/T9Keyboard';
import ABC from './keyboards/ABCKeyboard';

export default {
  components: {
    J9Keyboard,
    T9Keyboard,
    ABC,
  },
  data() {
    return {
      isActive: false,
      keyboardMode: 'J9Keyboard',
    };
  },
  methods: {
    keyDownHandler(keyCode) {
      console.log(keyCode);
      this.$refs.J9KeyboardRef.keyDownHandler(keyCode);
      switch (keyCode) {
        case 49:
          // 1
          this.$emit('ABC');
          this.keyboardMode = 'ABC';
          break;
        case 50:
          // 2
          this.keyboardMode = 'T9Keyboard';
          break;
        case 51:
          // 3
          this.keyboardMode = 'J9Keyboard';
          break;
        default: break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  #search {
    width: 100%;
    height: 100%;
    .vkb{
      width: 50vw;
    }
  }
</style>
