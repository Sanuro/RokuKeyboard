<template>

    <div id='homeMenu' v-if='showHomeMenu === 0' class='HomeMenu'>
        <ul v-for='item in items' :key='item.id' :class='{"active-item": currentItem === item.id}'>
            {{item.text}}
        </ul>
    </div>

</template>

<script>
export default {
  props: {
    focused: Boolean,
  },
  computed: {
    modal() {
      return this.$store.state.isKeyboardModal;
    },
  },
  data() {
    return {
      showHomeMenu: 0,
      currentItem: 1,
      items: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'My Feed' },
        { id: 3, text: 'Movie Store' },
        { id: 4, text: 'TV Store' },
        { id: 5, text: 'News' },
        { id: 6, text: 'Search' },
        { id: 7, text: 'Streaming Channels' },
        { id: 8, text: 'Settings' },
      ],
    };
  },
  methods: {
    keyDownHandler(keyCode) {
      console.log(this.showHomeMenu, 'homemenu');
      switch (keyCode) {
        case 38:
          // up
          this.currentItem--;
          if (this.currentItem === 0) {
            this.currentItem = 8;
            console.log('reached end');
          }
          break;
        case 40:
          // down
          this.currentItem++;
          if (this.currentItem === 9) {
            this.currentItem = 1;
          }
          break;
        case 39:
          // right
          this.$emit('right');
          if (this.showHomeMenu < 4) {
            this.showHomeMenu++;
            this.$store.commit('focusChange', 'grid');
            // console.log('focus changed', this.$store.commit('focusChange', 'grid'));
          }
            // console.log(this.showHomeMenu);
          break;
        case 37:
          // left
          // this.$emit('left');
          if (this.showHomeMenu > 0) {
            this.showHomeMenu--;
          }
          break;
          // console.log(this.showHomeMenu);
        default: break;
      }
      // if (keyCode === 38) {
      //   this.currentItem--;

      //   // console.log('upping');
      //   if (this.currentItem === 0) {
      //     this.currentItem = 8;
      //     // console.log('reached end');
      //   }
      // } else if (keyCode === 40) {
      //   this.currentItem++;
      //   // console.log(this.$store.state.isKeyboardModal);
      //   // console.log('downing');
      //   if (this.currentItem === 9) {
      //     this.currentItem = 1;
      //   }
      // } else if (keyCode === 39) {
      //   // console.log('right');
      //   this.$emit('right');
      //   if (this.showHomeMenu < 4) {
      //     this.showHomeMenu++;
      //     this.$store.commit('focusChange', 'appMenu');
      //     // console.log(this.showHomeMenu);
      //   }
      // } else if (keyCode === 37) {
      //   // console.log('left');
      //   this.$emit('left');
      //   if (this.showHomeMenu > 0) {
      //     this.showHomeMenu--;
      //     // console.log(this.showHomeMenu);
      //   }
    },
  },
};
</script>

<style scoped>

.HomeMenu{
    min-width: 25vw;
    color: #eee9e9;
    font-size: 2vw;
    margin: 5px;
    text-align: left;
    margin-left: 3vw;
    justify-content: space-around;
    /* font-size: 2vw; */
}
ul{
  border-left: 2vw solid transparent;
}

.active-item {
  align-content: space-between;
  border-left: 2vw solid #eee9e9;
  background-color: #eee9e9;
  color: black;
  /* border-radius: 10px; */
  /* justify-content: start; */
  /* margin: 3%; */
}


</style>
