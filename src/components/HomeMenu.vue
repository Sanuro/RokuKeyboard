<template>

    <div class='HomeMenu' @keydown='nextItem'>
        <ul v-for='item in items' :key='item.id' :class='{"active-item": currentItem === item.id}'>
            {{item.text}}
        </ul>
    </div>

</template>

<script>
// Vue.use(require('vue-shortkey'))

export default {
  name: 'HomeMenu',
  data() {
    return {
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
          console.log('reached ed');
        }
      } else if (event.keyCode === 40) {
        this.currentItem++;
        console.log('downing');
        if (this.currentItem === 9) {
          this.currentItem = 1;
        }
      }
    },
  },
};
</script>

<style scoped>
.HomeMenu{
    width: 400px;
    
}
.active-item {
  background-color: #FEFEFE;
}

</style>
