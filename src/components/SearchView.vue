<template>

  <div id="search">
    <keep-alive>
      <component class="vkb" ref='J9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/> 
    </keep-alive>
  </div>

</template>

<script>
import J9 from './keyboards/J9Keyboard';
import T9 from './keyboards/T9Keyboard';
import ABC from './keyboards/ABCKeyboard';

export default {
  components: {
    J9,
    T9,
    ABC,
  },
  data() {
    return {
      isActive: false,
      keyboardMode: 'T9',
    };
  },
  methods: {
    keyDownHandler(keyCode) {
      console.log(keyCode);
      this.$refs.J9KeyboardRef.keyDownHandler(keyCode);
      switch (keyCode) {
        case 49:
          // 1
          // this.$emit('ABC');
          this.keyboardMode = 'ABC';
          break;
        case 50:
          // 2
          this.keyboardMode = 'T9';
          break;
        case 51:
          // 3
          this.keyboardMode = 'J9';
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
