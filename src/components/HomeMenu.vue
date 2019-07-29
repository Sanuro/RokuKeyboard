<template>

    <div v-if='showHomeMenu === 0' class='HomeMenu' @keydown='nextItem'>
        <ul v-for='item in items' :key='item.id' :class='{"active-item": currentItem === item.id}'>
            {{item.text}}
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HomeMenu',
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
  mounted() {
    document.addEventListener('keydown', this.nextItem);
  },
  methods: {
    nextItem(event) {
      if (this.$store.state.isKeyboardModal === false) {
        console.log(this.showHomeMenu, 'homemenu');
        if (event.keyCode === 38) {
          this.currentItem--;

          // console.log('upping');
          if (this.currentItem === 0) {
            this.currentItem = 8;
            // console.log('reached end');
          }
        } else if (event.keyCode === 40) {
          this.currentItem++;
          // console.log(this.$store.state.isKeyboardModal);
          // console.log('downing');
          if (this.currentItem === 9) {
            this.currentItem = 1;
          }
        } else if (event.keyCode === 39) {
          // console.log('right');
          if (this.showHomeMenu < 4) {
            this.showHomeMenu++;
            this.$store.commit('focusChange', 'appMenu');
            // console.log(this.showHomeMenu);
          }
        } else if (event.keyCode === 37) {
          // console.log('left');
          if (this.showHomeMenu > 0) {
            this.showHomeMenu--;
            // console.log(this.showHomeMenu);
          }
        }
      }
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
