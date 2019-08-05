<template>
  <div id="search">
    <component class="vkb" ref='J9KeyboardRef' :is="keybaordMode" @left="$emit('left')"/>          
  </div>
</template>
<script>
import J9 from './keyboards/J9Keyboard';
import T9 from './keyboards/T9Keyboard';

export default {
  components: {
    J9,
    T9,
  },
  data() {
    return {
      isActive: false,
      keybaordMode: 'J9',
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
