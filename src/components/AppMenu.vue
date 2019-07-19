<template>

    <div class='AppMenu' @keydown='nextImage'>
      <div v-for='row in images'>
        <img id='apps' v-for="col in row" v-bind:src="col.url" :key="col.id" :class='{"active-image": currentImage === col.id && showPictures}' :alt="col.alt" />
      </div>

    </div>

</template>
<script>
export default {
  name: 'AppMenu',
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
    nextImage() {
      if (event.keyCode === 39 && !this.showPictures) {
        this.showPictures = true;
        console.log(this.row, this.column);
      } else if (event.keyCode === 39 && this.showPictures) {
        console.log('right');
        this.row++;
        this.currentImage = this.images[this.row][this.column].id;
      } else if (event.keyCode === 37) {
        console.log('left');
        if (this.row === 0) {
          this.showPictures = false;
        } else {
          this.row--;
          this.currentImage = this.images[this.row][this.column].id;
        }
      } else if (event.keyCode === 40 && this.showPictures) {
        console.log('down');
        this.column++;
        this.currentImage = this.images[this.row][this.column].id;
        // this.images = temp;
        // this.images.push(this.images[0]);
        // this.images.splice(this.column - 1, 1);
        // this.images.push(temp);
        // this.images.splice(2, 0, temp);
        // arr.push(this.data.slice(i * COLUMN, (i + 1) * COLUMN));
      } else if (event.keyCode === 38 && this.showPictures) {
        console.log('up');
        this.column--;
        this.currentImage = this.images[this.row][this.column].id;
      }
    },
  },
};
</script>

<style>
img{
  margin: 5px;
}
.AppMenu{
  justify-content: space-around;
}
.active-image {
  /* background-color: #FEFEFE; */
  outline: 4px solid white;
  /* margin: -10px; */
  /* margin: 10px; */
}


</style>
