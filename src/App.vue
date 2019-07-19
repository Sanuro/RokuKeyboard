npm<template>
  <div id="app">

    <Header id='header'>header</Header>
    <HomeMenu id='homeMenu'>homeMenu</HomeMenu>

    <div id='appMenuBox'>
      <AppMenu id='appMenu'>appMenu</AppMenu>
    </div>

  </div>
</template>
v-bind:class='{active:isActive}'
<script>
// Vue.use(require('vue-shortkey'))

// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import AppMenu from './components/AppMenu';

export default {
  name: 'app',
  components: {
    Header,
    HomeMenu,
    AppMenu,
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  },
  // methods: {
  //   onKeyDown(e) {
  //     // console.log('down');
  //     if (e.repeat) return;
  //     this.keyHoldTimer = setTimeout(this.onKeyHold, 500, e);
  //     switch (e.key) {
  //       case KEY.HOME:
  //         setTimeout(this.gotoHome, 100);
  //         break;
  //       case KEY.VOLUME_DOWN:
  //         this.volumeDown();
  //         break;
  //       case KEY.VOLUME_UP:
  //         this.volumeUp();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // },
};
</script>

<style>
body{
  background-image: url('../static/image/Newman_TRC_Background.jpg');
}
#homeMenu{
  /* display:inline-block; */
  float: left;
  /* display: inline-block; */
}
#appMenuBox{
  display: inline-block;
  /* float: right; */
  width: 880px;
}
#appMenu{
  /* display: inline-block; */

  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
