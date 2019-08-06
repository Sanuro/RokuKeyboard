<template>
  <div id='app'>
    <Header id='header'>header</Header>
      <div id='main_app'>
        <HomeMenu id='homeMenu' ref='menu' :focused="focusTarget==='menu'" @right="focusTarget='main'" @change="onMenuChange">homeMenu</HomeMenu>
        <div id="main-view"> 
          <template v-if="currentMenu === 'search'">
            <Search :focused="focusTarget==='searchMenu'" @back="focusTarget==='ad'" @left="focusTarget='menu'" ref="main"/>
          </template>
          <template v-else>
            <div id='appMenuBox'>
              <AppMenu id='appMenu' :focused="focusTarget==='main'" @right="focusTarget='ad'" @left="focusTarget='menu'" ref="main">appMenu</AppMenu>
            </div>
            <Ad id='ad' v-if="focusTarget !== 'menu'" :focused="focusTarget==='ad'" @left="focusTarget='main'" ref="ad">ad
            </Ad>
          </template>
        </div>
      </div>
  </div>
</template>
<script>
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import AppMenu from './components/AppMenu';
import Ad from './components/Ad';
import KeyController from './components/KeyController';
import Search from '../src/components/SearchView';

// import modal from './components/ModalBox';

// import ModalBox from './components/ModalBox';
// import KeyboardMenu from './components/keyboards/KeyboardMenu';

export default {
  name: 'app',
  components: {
    Header,
    HomeMenu,
    AppMenu,
    Ad,
    KeyController,
    Search,
  },
  computed: {
    dialog() {
      return this.$store.state.isKeyboardModal;
    },
  },
  data() {
    return {
      currentMenu: 'home',
      focusTarget: null,
    };
  },
  beforeMount() {
    window.addEventListener('keydown', this.onKeyDown);
    this.focusTarget = 'menu';
  },
  methods: {
    onMenuChange(item) {
      this.currentMenu = item.text.toLowerCase();
    },
    onKeyDown(e) {
      this.$refs[this.focusTarget].keyDownHandler(e.keyCode);
      // this.$refs[this.focusTarget].showAd(e.keyCode);
    },
  },

};
</script>

<style>
body{
  background-image: url('/static/image/Newman_TRC_Background.jpg');
  background-color: black;
  background-repeat: no-repeat;
  background-size: auto;
  overflow: hidden;
}

#app{
  height: 100vh;
  padding: 0 5vw 0 5vw;
}

#main_app, #main-view{
  display: flex;
  justify-content: stretch;
  width: 100%;
  height: 100%;
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
