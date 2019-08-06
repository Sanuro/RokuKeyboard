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
    // showModal(event) {
    //   if (event.keyCode === 13 && this.isActive) {
    //     this.isModalVisible = true;
    //     // console.log('enter');
    //     this.$store.commit('changeModal', true);
    //   }
    // },
    // closeModal(event) {
    //   if (event.keyCode === 66 || event.keyCode === 72) {
    //     this.isModalVisible = false;
    //     // console.log('b');
    //     this.$store.commit('changeModal', false);
    //     // console.log('b being pressed');
    //   }
    // },
    // showAd(event) {
    //   if (this.$store.state.isKeyboardModal === false) {
    //     if (event.keyCode === 39) {
    //       // console.log('right');
    //       if (this.counter < 4) {
    //         this.counter++;
    //         // console.log(this.counter);
    //       }
    //       if (this.counter > 0) {
    //         this.showAdBox = true;
    //         if (this.counter === 4) {
    //           this.isActive = true;
    //         }
    //       }
    //     } else if (event.keyCode === 37) {
    //       // console.log('left');
    //       if (this.counter > 0) {
    //         if (this.counter === 1) {
    //           this.showAdBox = false;
    //         }
    //         this.counter--;
    //         this.isActive = false;
    //       }
    //     }
    //   }
    // },
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
  /* justify-content: flex-end; */
  width: 25vw;
  // height: 70vh;
  margin-left: 7vw;
  // margin-right: 3%;
}
</style>
