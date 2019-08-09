<template>

  <div class="search">
    <keep-alive>
      <component class="vkb" ref='J9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/> 
    </keep-alive>

    <div class="suggestion">
      <div id='spiderMan'><img src='/static/image/icon_movie.png'> Spider Man</div>
      <div id='searchResult'><img src='/static/image/icon_celebrity.png'> Keanu Reeves</div>
      <div id='searchResult'><img src='/static/image/icon_movie.png'> The Last of Us</div>
      <div id='searchResult'><img src='/static/image/icon_celebrity.png'> Tom Hanks</div>
      <div id='searchResult'><img src='/static/image/icon_info.png'> Your email</div>
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
    // padding-top: 2vh;
    // padding-left: 3vw;
    // background-color: rgba(255, 255, 255, 0.5);

  }
  #spiderMan{
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(255, 255, 255, 0.329));
    // box-shadow: 3px 3px 4px black;
    padding: 2.5% 0% 2.5% 4%;
    border: 1px solid black;
    border-radius: 5px;
    // align-: center;
  }
  #searchResult{
    padding: 4%;
  }
</style>
