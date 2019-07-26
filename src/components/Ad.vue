<template>
  <div id="Ad">

   <img v-if='showAdBox' v-bind:class="{'active': isActive}" @keydown='showAd' src='/static/image/Claritin_ad.jpg'/>
  <!-- <div id='adBox'> hello
    </div> -->

    <div id='modal' class="btn" @keydown="showModal">
    </div>
    <modal v-show="isModalVisible" @keydown="closeModal"/>

  </div>
</template>

<script>
import modal from './ModalBox';

export default {
  name: 'Ad',
  components: {
    modal,
  },
  data() {
    return {
      isActive: false,
      showAdBox: false,
      counter: 0,
      isModalVisible: false,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.showAd);
    window.addEventListener('keydown', this.showModal);
    window.addEventListener('keydown', this.closeModal);
  },

  methods: {
    showModal(event) {
      if (event.keyCode === 13 && this.isActive) {
        this.isModalVisible = true;
      }
    },
    closeModal(event) {
      if (event.keyCode === 27) {
        this.isModalVisible = false;
        // console.log('esc being pressed');
      }
    },
    showAd(event) {
      if (event.keyCode === 39) {
        console.log('right');
        if (this.counter < 4) {
          this.counter++;
          // console.log(this.counter);
        }
        if (this.counter > 0) {
          this.showAdBox = true;
          if (this.counter === 4) {
            this.isActive = true;
          }
        }
      } else if (event.keyCode === 37) {
        console.log('left');
        if (this.counter > 0) {
          if (this.counter === 1) {
            this.showAdBox = false;
          }
          this.counter--;
          this.isActive = false;
        }
      }
      console.log(this.counter, 'Ad', this.isActive);
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
  /* justify-content: flex-end; */
  width: 25vw;
  margin-left: 7vw;
  // margin-right: 3%;
}
</style>
