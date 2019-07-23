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
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown);
  },

};
</script>

<style>
body{
  background-image: url('../static/image/Newman_TRC_Background.jpg');
  background-color: black;
  background-repeat: no-repeat;
  background-size: auto;
  overflow: hidden;
}

#app{
  height: 100vh;
}

#main_app{
  display: flex;
  justify-content: stretch;
}

#appMenuBox{
  height: 60vh;
  justify-content: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
