<template>

  <div id='header'>
      <div class = 'left'>
        <img class="logo" alt='roku image' src="../../static/image/large_roku.png">
      </div>

      <div class ='right'>
        <p class = 'time'>{{ time }}</p>
      </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      direction: 'right',
      time: '',
    };
  },
  mounted() {
    const now = new Date();
    const hh = now.getHours();
    if (hh <= 12) {
      this.time = `${hh}:`;
    } else {
      this.time = `${hh % 12}:`;
    }
    const mm = now.getMinutes();
    if (mm < 10) this.time += `0${mm}`;
    else this.time += mm;
    if (now.getHours() >= 12) this.time += ' pm';
    else this.time += 'am';
  },
};

</script>

<style scoped lang="scss">

#header{
    display: flex;
    justify-content: space-between;
    margin: 1% 1% 1% 1%;

    color: #eee9e9;

    .logo{
      width: 15vw;
      // margin: 1% 0% 1% 1%;
    }

    .right{
      font-size: 3vw;
    }
}

</style>
