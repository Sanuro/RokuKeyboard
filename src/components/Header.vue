<template>

  <div id='header'>

      <div id='left'>
        <img id='logo' class="logo" alt='roku image' src="/static/image/large_roku.png">
      </div>

      <div id='right'>
        <p id='time' class = 'time'>{{ time }}</p>
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
  color: #eee9e9;   
  margin: 4% 5% 6% 0%;
}

#left{
  align-self: center;
  margin-left: 5vw;
}

#logo{
  width: 8vw;
}

#right{
  align-self: center;
  // justify-content: flex-end;
  font-size: 2vw;
}

#time{
  justify-content: right;

}

</style>
