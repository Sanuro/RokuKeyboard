<template>

    <div class='AppMenu' @keydown='nextImage'>
      <img id='apps' v-for="image in images" v-bind:src="image.url" :key='image.id' :class='{"active-image": currentImage === image.id}' :alt="image.alt" />
    </div>

</template>


<script>
export default {
  name: 'AppMenu',

  data() {
    return {
      currentImage: 1,
      images: [
          { id: 1, url: '/static/image/aquatic.png', alt: 'aquatic' },
          { id: 2, url: '/static/image/buzzfeed.png', alt: 'buzzfeed' },
          { id: 3, url: '/static/image/filmrise.png', alt: 'filmrise' },
          { id: 4, url: '/static/image/hgtv.png', alt: 'ps4' },
          { id: 5, url: '/static/image/tubi.png', alt: 'showtime' },
          { id: 6, url: '/static/image/ps4.png', alt: 'stirr' },
          { id: 7, url: '/static/image/pandora.png', alt: 'pandora' },
          { id: 8, url: '/static/image/stirr.png', alt: 'stirr' },
          { id: 9, url: '/static/image/TLC.png', alt: 'logo' },
      ],
    };
  },
  mounted() {
    document.addEventListener('keydown', this.nextImage);
  },
  methods: {
    nextImage() {
      if (event.keyCode === 38 && this.currentImage > 1) {
        this.currentImage--;
      } else if (event.keyCode === 40 && this.currentImage < 8) {
        this.currentImage++;
      }
    },
  },
};
</script>

<style>

#apps{
    
}


</style>
