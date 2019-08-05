<template>

    <div class='AppMenuContainer'>
      <div id='appMenu' v-for='row in images'>
        <img id='apps' v-for="col in row" v-bind:src="col.url" :key="col.id" :class='{"active-image": focused && currentImageId === col.id}' :alt="col.alt" />
      </div>

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
      row: 0,
      column: 0,
      currentImageId: 1,
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
  // mounted() {
  //   document.addEventListener('keydown', this.nextImage);
  // },
  methods: {
    keyDownHandler(keyCode) {
      let i = 0;
      console.log('app menu');
      // if (this.$store.state.isKeyboardModal === false) {
      switch (keyCode) {
        case 38:
          // up
          for (i = 0; i < this.images.length; i++) {
            this.images[i].unshift(this.images[i].pop());
            document.getElementById('appMenu').classList.add('smooth');
            this.currentImageId = this.images[this.row][0].id;
          }
          break;
        case 40:
          // down
          for (i = 0; i < this.images.length; i++) {
            this.images[i].push(this.images[i].shift());
          }
          this.currentImageId = this.images[this.row][0].id;
          break;
        case 39:
          // right
          if (this.row < 2) {
            this.row++;
            this.currentImageId = this.images[this.row][this.column].id;
            // if (this.row === 2) {
            // }
            console.log(this.row);
            console.log('39');
          } else if (this.row === 2) {
            // this.row++;
            this.$emit('right');
            // this.$store.commit('focusChange', 'ad');
            console.log(this.focused);
            console.log(this.row);
            console.log('40');
          }
          break;
        case 37:
          // left
          if (this.row === 0) {
            console.log('extra');
            // this.$store.commit('focusChange', 'menu');
            this.$emit('left');
            console.log(this.focused);
            // console.log('going left for home');
          } else {
            this.row--;
            console.log(this.row);
            this.currentImageId = this.images[this.row][this.column].id;
          }
          break;
        default: break;
      }
      //   if (event.keyCode === 39) {
      //     // console.log('right');
      //     if (this.row === 0 && !this.showPictures) {
      //       this.showPictures = true;
      //     } else if (this.row < 2) {
      //       this.row++;
      //       this.currentImage = this.images[this.row][this.column].id;
      //       // console.log(this.row, this.column);
      //       // document.getElementById('apps').classList.add('image-slide');
      //     } else if (this.row === 2) {
      //       // console.log('App Gone');
      //       this.showPictures = false;
      //       this.row++;
      //       // if (this.row > 2) {
      //       //   this.showPictures = false;
      //       // }
      //     }
      //   } else if (event.keyCode === 37) {
      //     // console.log('left');
      //     if (this.row === 0) {
      //       this.showPictures = false;
      //     } else if (this.row === 3) {
      //       this.showPictures = true;
      //       this.row--;
      //     } else {
      //       this.row--;
      //       this.currentImage = this.images[this.row][this.column].id;
      //     }
      //   } else if (event.keyCode === 40 && this.showPictures) {
      //     // console.log('down');
      //     // this.column++;
      //     for (i = 0; i < this.images.length; i++) {
      //       this.images[i].push(this.images[i].shift());
      //     }
      //     this.currentImage = this.images[this.row][0].id;
      //     // console.log(this.row, this.column);
      //   } else if (event.keyCode === 38 && this.showPictures) {
      //     // console.log('up');
      //     // this.column--;
      //     for (i = 0; i < this.images.length; i++) {
      //       this.images[i].unshift(this.images[i].pop());
      //     }
      //     document.getElementById('appMenu').classList.add('smooth');
      //     this.currentImage = this.images[this.row][0].id;
      //   }
      // }
    },
  },
};
</script>

<style scoped lang="scss">

.AppMenuContainer{
  display: flex;
  width: 53vw;
  // margin-right: 10vw;
}

#apps{
  margin: 5px;
  width: 95%;
  margin-left: 5vw;
}
.active-image {
  outline: 0.5vw solid #eee9e9;
  // transition: 0.5s;
}

</style>
