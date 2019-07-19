<template>
  <div id="Ad">

   <img v-if='showMenu' @keydown='nextAd' src='/static/image/Claritin_ad.jpg'/>

  </div>
</template>
v-bind:class='{active:isActive}'
<script>

export default {
  name: 'Ad',
  data() {
    return {
      showMenu: false,
      showDiv: 0,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.nextAd);
  },
//   beforeDestroy() {
//     window.removeEventListener('keydown', this.onKeyDown);
//     window.removeEventListener('keyup', this.onKeyUp);
//   },
  methods: {
    nextAd() {
      if (event.keyCode === 39 && !this.showMenu) {
        this.showMenu = !this.showMenu;
        this.showDiv = 3;
      } else if (event.keyCode === 37 && this.showMenu) {
        if (this.showDiv > 0) {
          this.showDiv--;
        } if (this.showDiv === 0) {
          this.showMenu = !this.showMenu;
        }
      }
    },
  },
};
</script>

<style>
img{
    /* position: relative; */
    float: right;
    /* display: inline-block; */
}
</style>
