<template>
  <div id="Ad">

   <img v-if='showAdBox' v-bind:class="{'active': focused}" src='/static/image/Claritin_ad.jpg'/>
  <!-- <div id='adBox'> hello
    </div> -->

    <!-- <div id='modal' class="btn" @keydown="showModal"> -->
    <!-- </div> -->
    <!-- <modal v-show="isModalVisible" ref="modal"/> -->

  </div>
</template>

<script>
// import modal from './ModalBox';

export default {
  name: 'Ad',
  props: {
    focused: Boolean,
  },
  components: {
    // modal,
  },
  computed: {
    modal() {
      return this.$store.state.isKeyboardModal;
    },
  },
  data() {
    return {
      showAdBox: true,
      // counter: 0,
      // isModalVisible: false,
    };
  },
  mounted() {
    // window.addEventListener('keydown', this.showAd);
    window.addEventListener('keydown', this.showModal);
    // window.addEventListener('keydown', this.closeModal);
  },

  methods: {
    keyDownHandler(keyCode) {
      // console.log(this.$store.state.isKeyboardModal, this.counter, 'does ad work', this.showAdBox, this.isActive);
      // console.log(this.showHomeMenu, 'ad');
      if (this.$store.state.isKeyboardModal === false) {
        switch (keyCode) {
          case 39:
            //  right
            // if (this.counter < 1) {
              // this.counter++;
            // }
            // if (this.counter > 0) {
            //   // this.showAdBox = true;
            //   if (this.counter === 1) {
            //     this.isActive = true;
            //   }
            // }
            break;
          case 37:
            //  left
            this.$emit('left');
            // this.$store.commit('focusChange', 'grid');
            // if (this.counter > 0) {
              // if (this.counter === 1) {
              //   this.showAdBox = false;
              // }
            console.log('pressing left');
              // this.counter--;
            // this.isActive = false;
            // }
            break;
          case 13:
            // if (this.isActive) {
              // this.isModalVisible = true;
            this.$store.commit('changeModal', true);
            this.$emit('enter');
              // console.log('switch case in AD');
            // }
            break;
          default: break;
        }
      }
      switch (keyCode) {
        case 66:
          // b
          // this.isModalVisible = false;
          this.$store.commit('changeModal', false);
          this.$emit('back');
          console.log('keypressed b');
          break;
        case 72:
          // h
          // this.isModalVisible = false;
          this.$store.commit('changeModal', false);
          break;
        default: break;
      }
    },
  },
};
</script>

<style scoped lang="scss">

#Ad{
  margin: 5px;
}
.active{
  outline: 5px solid white;
}
#adBox{
  outline: 5px solid white;
}
img{
  width: 25vw;
  margin-left: 7vw;
}
</style>
