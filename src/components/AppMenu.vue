<template>

    <div class='AppMenuContainer' @keydown='nextImage'>
      <div id='appMenu' v-for='row in images'>
        <img id='apps' v-for="col in row" v-bind:src="col.url" :key="col.id" :class='{"active-image": currentImage === col.id && showPictures}' :alt="col.alt" />
      </div>

    </div>

</template>
<script>
export default {
  name: 'AppMenu',
  computed: {
    modal() {
      return this.$store.state.isKeyboardModal;
    },
  },
  data() {
    return {
      showPictures: false,
      row: 0,
      column: 0,
      currentImage: 1,
      images: [
        [
          { id: 1, url: '/static/image/aquatic.png', alt: 'aquatic' },
          { id: 4, url: '/static/image/hgtv.png', alt: 'ps4' },
          { id: 7, url: '/static/image/pandora.png', alt: 'pandora' },
        ],
        [
          { id: 2, url: '/static/image/buzzfeed.png', alt: 'buzzfeed' },
          { id: 5, url: '/static/image/tubi.png', alt: 'showtime' },
          { id: 8, url: '/static/image/stirr.png', alt: 'stirr' },
        ],
        [
          { id: 3, url: '/static/image/filmrise.png', alt: 'filmrise' },
          { id: 6, url: '/static/image/ps4.png', alt: 'stirr' },
          { id: 9, url: '/static/image/TLC.png', alt: 'logo' },
        ],
      ],
    };
  },
  mounted() {
    document.addEventListener('keydown', this.nextImage);
  },
  methods: {
    nextImage(event) {
      let i = 0;
      console.log(this.row, this.column, this.showPictures);
      if (this.$store.state.isKeyboardModal === false) {
        if (event.keyCode === 13) {
          // this.showPictures = !this.showPictures;
        }
        if (event.keyCode === 39) {
          // console.log('right');
          if (this.row === 0 && !this.showPictures) {
            this.showPictures = true;
          } else if (this.row < 2) {
            this.row++;
            this.currentImage = this.images[this.row][this.column].id;
            // console.log(this.row, this.column);
            // document.getElementById('apps').classList.add('image-slide');
          } else if (this.row === 2) {
            // console.log('App Gone');
            this.showPictures = false;
            this.row++;
            // if (this.row > 2) {
            //   this.showPictures = false;
            // }
          }
        } else if (event.keyCode === 37) {
          // console.log('left');
          if (this.row === 0) {
            this.showPictures = false;
          } else if (this.row === 3) {
            this.showPictures = true;
            this.row--;
          } else {
            this.row--;
            this.currentImage = this.images[this.row][this.column].id;
          }
        } else if (event.keyCode === 40 && this.showPictures) {
          // console.log('down');
          // this.column++;
          for (i = 0; i < this.images.length; i++) {
            this.images[i].push(this.images[i].shift());
          }
          this.currentImage = this.images[this.row][0].id;
          // console.log(this.row, this.column);
        } else if (event.keyCode === 38 && this.showPictures) {
          // console.log('up');
          // this.column--;
          for (i = 0; i < this.images.length; i++) {
            this.images[i].unshift(this.images[i].pop());
          }
          document.getElementById('appMenu').classList.add('smooth');
          this.currentImage = this.images[this.row][0].id;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
#apps{
  margin: 5px;
}
.AppMenuContainer{
  display: flex;
  width: 65vw;
  // margin-left: 5vw;
}

#apps{
  width: 95%;
  margin-left: 5vw;
}
.active-image {
  outline: 0.5vw solid #eee9e9;
  // transition: 0.5s;
}

</style>
