<template>

    <div id='homeMenu' v-if='focused' class='HomeMenu'>
        <ul v-for='item in items' :key='item.id' :class='{"active-item": focused && currentItem === item.id}'>
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
      currentItem: 1,
      myTrack: new Audio('audio/tinyButton.mp3'),
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
  watch: {
    currentItem(v) {
      this.$emit('change', this.items[v - 1]);
    },
  },
  methods: {
    keyDownHandler(keyCode) {
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
          // this.$emit('searchRight');
          break;
        case 37:
          // left
          break;
        case 13:
          this.$emit('search');
          console.log('showing search');
          break;
        default: break;
      }
    },
  },
};
</script>

<style scoped>

.HomeMenu{
    min-width: 25vw;
    color: #eee9e9;
    font-size: 1.8vw;
    font-weight: bold;
    margin: 5px;
    text-align: left;
    margin-left: 3vw;
    justify-content: space-around;
    /* font-size: 2vw; */
}
ul{
  border-left: 2vw solid transparent;
  padding: 2.5% 0 2.5% 0;
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
