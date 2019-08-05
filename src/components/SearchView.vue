<template>

  <div id="search">
    <component class="vkb" ref='J9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/>          
  </div>

</template>

<script>
import J9Keyboard from './keyboards/J9Keyboard';
import T9 from './keyboards/T9Keyboard';

export default {
  components: {
    J9Keyboard,
    T9,
  },
  data() {
    return {
      isActive: false,
      keyboardMode: 'J9',
    };
  },
  methods: {
    keyDownHandler(keyCode) {
      this.$refs.J9KeyboardRef.keyDownHandler(keyCode);
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
