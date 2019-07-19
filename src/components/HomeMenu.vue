<template>

    <div v-if='showDiv === 0' class='HomeMenu' @keydown='nextItem'>
        <ul v-for='item in items' :key='item.id' :class='{"active-item": currentItem === item.id}'>
            {{item.text}}
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HomeMenu',
  data() {
    return {
      // showMenu: true,
      showDiv: 0,
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
    nextItem() {
      if (event.keyCode === 38) {
        this.currentItem--;
        console.log('upping');
        if (this.currentItem === 0) {
          this.currentItem = 8;
          console.log('reached end');
        }
      } else if (event.keyCode === 40) {
        this.currentItem++;
        console.log('downing');
        if (this.currentItem === 9) {
          this.currentItem = 1;
        }
      } else if (event.keyCode === 39) {
        console.log('right');
        if (this.showDiv < 4) {
          this.showDiv++;
        }
      } else if (event.keyCode === 37) {
        console.log('left');
        if (this.showDiv > 0) {
          this.showDiv--;
        }
      }
    },
  },
};
</script>

<style scoped>
.HomeMenu{
    width: 400px;
    color: white;
}

.active-item {
  background-color: #FEFEFE;
  color: black;
}

</style>
