<template>

  <div class="search">
    <keep-alive>
      <component class="vkb" ref='J9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/> 
    </keep-alive>

    <div class="suggestion">
      <div>Spider Man</div><br>
      <div>Keanu Reeves</div><br>
      <div>The Last of Us</div><br>
      <div>Tom Hanks</div><br>
      <div>Your email</div><br>
    </div>
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
      keyboardMode: 'ABC',
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
  .search {
    width: 100%;
    height: 100%;
    display: flex;
    .vkb{
      width: 50vw;
    }

  }
  .suggestion{
    color: #efefef;
    font-size: 2vw;
    text-align: left;
    width: 30vw;
    max-height: 50vh;
    padding-top: 2vh;
    padding-left: 3vw;
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>
