<template>

  <div class="search">
    <keep-alive>
      <component class="vkb" 
      :focused="focused" ref='J9KeyboardRef' :is="keyboardMode" @left="$emit('left')"/> 
    </keep-alive>

    <div class="suggestion" v-if="focused">
      <div class="title">Last Searched Keyword</div>
      <div id='spiderMan' class='searchResult'><img src='/static/image/icon_movie.png'> Spider Man</div>
      <div class='searchResult'><img src='/static/image/icon_celebrity.png'> Keanu Reeves</div>
      <div class='searchResult'><img src='/static/image/icon_movie.png'> The Last of Us</div>
      <div class='searchResult'><img src='/static/image/icon_celebrity.png'> Tom Hanks</div>
      <div class='searchResult'><img src='/static/image/icon_info.png'> Your email</div>
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
  props: {
    focused: Boolean,
  },
  data() {
    return {
      // currentKeyboard: 'on',
      isActive: false,
      keyboardMode: 'ABC',
    };
  },
  methods: {
    keyDownHandler(keyCode) {
      console.log(keyCode);
      // this.$refs[this.focusTarget].keyDownHandler(keyCode);
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
      width: 24vw !important;
      margin-right: 17vw;
    }
  }
  .suggestion{
    position: relative;
    color: #efefef;
    font-size: 1.7vw;
    text-align: left;
    width: 30vw;
    max-height: 50vh;
    // padding-top: 2vh;
    // padding-left: 3vw;
    // background-color: rgba(255, 255, 255, 0.5);

    .title{
      margin-bottom: 0.3em;
      bottom: 100%;
      opacity: .8;
      font-size: .9em;
    }
  }
  .searchResult{
    width: 39vw;
    padding: 0 .8em;
    margin: .9em 0;
    img{
      vertical-align: bottom;
      margin-right: 0.6em;
    }
    &#spiderMan{
      background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(255, 255, 255, 0.329));
      padding: .5em .8em;
      margin: 0;
      margin-bottom: -.5em;
      border: 1px solid black;
      border-radius: 5px;
      // align-: center;
    }
  }
</style>
