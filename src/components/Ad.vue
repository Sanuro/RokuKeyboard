<template>
  <div id="Ad">

   <img v-if='showMenu' @keydown='nextAd' src='/static/image/Claritin_ad.jpg'/>

  </div>
</template>

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
      if (event.keyCode === 39) {
        if (this.showDiv < 3) {
          this.showDiv++;
        }
        if (this.showDiv > 0) {
          this.showMenu = true;
        }
      } else if (event.keyCode === 37) {
        if (this.showDiv > 0) {
          this.showDiv--;
        }
        if (this.showDiv === 0) {
          this.showMenu = false;
        }
      }
    },
  },
};
</script>

<style>

#Ad{
  margin: 5px;
}

img{
  justify-content: flex-end;
  width: 30vw;
}
</style>
