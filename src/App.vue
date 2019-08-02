<template>
  <div id='app'>
    <Header id='header'>header</Header>
      <div id='main_app'>
        <HomeMenu id='homeMenu' ref='menu' :focused="focusTarget==='menu'" @right="focusTarget='grid'">homeMenu</HomeMenu>
        <div id='appMenuBox'>
          <AppMenu id='appMenu' :focused="focusTarget==='grid'" @right="focusTarget='ad'" @left="focusTarget='menu'" ref="grid">appMenu</AppMenu>
        </div>
        <Ad id='ad' :focused="focusTarget==='ad'" @left="focusTarget='grid'" @enter="focusTarget==='dialog', isModalVisible=true" ref="ad">ad
        </Ad>
        <ModalBox v-show='isModalVisible' id='modal' :focused="focusTarget==='dialog'" @back=" isModalVisible=false, focusTarget==='ad'" ref="dialog"></ModalBox>
      </div>
  </div>
</template>
<script>
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import AppMenu from './components/AppMenu';
import Ad from './components/Ad';
import KeyController from './components/KeyController';
import ModalBox from '../src/components/ModalBox';

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
    ModalBox,
  },
  computed: {
    dialog() {
      return this.$store.state.isKeyboardModal;
    },
  },
  data() {
    return {
      isModalVisible: false,
      focusTarget: null,
    };
  },
  beforeMount() {
    window.addEventListener('keydown', this.onKeyDown);
    this.focusTarget = 'menu';
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
