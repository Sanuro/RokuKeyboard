<template>
  <div id="app">
      
  <Header id='header'>header</Header>

      <div id='main_app'>

        <HomeMenu id='homeMenu'>homeMenu</HomeMenu>
        <div id='appMenuBox'>
          <AppMenu id='appMenu'>appMenu</AppMenu>
        </div>

      <Ad id='ad'>ad</Ad>
      </div>

  </div>
</template>
<script>
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import AppMenu from './components/AppMenu';
import Ad from './components/Ad';

export default {
  name: 'app',
  components: {
    Header,
    HomeMenu,
    AppMenu,
    Ad,
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
  /* height: 100%; */
  background-image: url('../static/image/Newman_TRC_Background.jpg');
  background-color: black;
  background-repeat: no-repeat;
  background-size: auto;
  overflow: hidden;
  /* height: 95vh; */
}

#app{
  /* padding: -20vh; */

  height: 100vh;
}
#main_app{
  display: flex;
  justify-content: stretch;
  /* justify-content: center; */
}

#homeMenu{
}
#appMenuBox{
  height: 60vh;
  justify-content: center;
  /* width: 65vw; */
  /* display: inline-block; */
}
#ad{
  /* position: relative; */
}
#appMenu{
  /* display: flex; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* font-size: 150%; */
}
</style>
