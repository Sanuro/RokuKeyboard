<template>
<div id='container'>

  <div id='inputJ99'>
    <input type='text' v-model='placeholderJ9' id='inputJ9' placeholder= 'Search'>
  </div>

  <div id='J9Keyboard'>

    <div id='letters' @keydown='J9'> 
      <ul id='listLetter' v-for='letter in letters' :key='letter.id' :class='{"active-letter": currentLetter === letter.id}'>
          {{letter.text}}<br>
          <img v-if='letter.id % 4 == 0' id='legendImg' v-bind:src='letter.src'>
          <img v-if='letter.id == 8' id='legendImg' src='/static/image/icon_pauseVideo.png'>
      </ul>
    </div>

  </div>

  <div id='legend'>

    <!-- <span id='legendInfo'>clear</span> -->
    <img id='legendImg' src='/static/image/icon_RWx2.png'>
    <!-- <span id='legendInfo'>space</span> -->
    <div id='playPause'>
      <img id='legendImg' src='/static/image/icon_playVideo.png'>
      <img id='legendImg' src='/static/image/icon_pauseVideo.png'>
    </div>
    <!-- <span id='legendInfo'>delete</span> -->
    <!-- <img id='legendImg' src='/static/image/icon_FFx2.png'> -->
    <img id='legendImg' src='/static/image/icon_replay.png'>
    <!-- <span id='legendInfo'>back</span> -->
    <!-- <img src='static/image/Icon_Back_MH.png'>  -->
    <!-- <span id='legendInfo'>home</span> -->
    <!-- <img src='static/image/Icon_Home_MH.png'> -->

  </div>
  

</div>
</template>

<script>
import KeyboardController from '../KeyController';

export default {
  name: 'J9Keyboard',
  components: {
    KeyboardController,
  },
  data() {
    return {
      i: -1,
      placeholderJ9: '',
      img: Image,
      timer: 0,
      pause: 0,
      difTolerance: 350,
      startTime: 0,
      endTime: 0,
      currentLetter: 1,
      letters: [
        { id: 1, text: 'A B C', textArray: ['A', 'B', 'C'] },
        { id: 2, text: 'J K L', textArray: ['J', 'K', 'L'] },
        { id: 3, text: 'S T U', textArray: ['S', 'T', 'U'] },
        { id: 4, text: 'Clear', textArray: ['', '', ''], src: '/static/image/icon_RWx2.png' },
        { id: 5, text: 'D E F', textArray: ['D', 'E', 'F'] },
        { id: 6, text: 'M N O', textArray: ['M', 'N', 'O'] },
        { id: 7, text: 'V W X', textArray: ['V', 'W', 'X'] },
        { id: 8, text: 'Space', textArray: [' ', ' ', ' '], src: '/static/image/icon_playVideo.png' },
        { id: 9, text: 'G H I', textArray: ['G', 'H', 'I'] },
        { id: 10, text: 'P Q R', textArray: ['P', 'Q', 'R'] },
        { id: 11, text: 'Y Z .', textArray: ['Y', 'Z', '.'] },
        { id: 12, text: 'Delete', textArray: ['', '', ''], src: '/static/image/icon_replay.png' },
      ],
    };
  },
  mounted() {
    document.addEventListener('keydown', this.J9);
  },
  methods: {
    timerFunc() {
      this.placeholderJ9 += (this.letters[this.currentLetter - 1].textArray[this.i]);
      console.log('letter logged', this.i);
      this.i = -1;
    },
    checkPause() {
      this.endTime = new Date().getTime();
      if (this.endTime - this.startTime >= this.difTolerance) {
        clearTimeout(this.timer);
        this.timerFunc();
        console.log('clearing timer');
      }
    },
    keyDownHandler(keyCode) {
      clearTimeout(this.timer);
      switch (keyCode) {
        case 82:
          //  r = delete
          this.placeholderJ9 = this.placeholderJ9.slice(0, -1);
          break;
        case 73:
          // i = clear
          this.placeholderJ9 = '';
          break;
        case 32:
          // space = space
          this.placeholderJ9 += ' ';
          break;
        case 13:
          // enter
          this.startTime = new Date().getTime();
          this.i = (this.i + 1) % 3;
          console.log(this.i, 'this is i');
          this.timer = setInterval(this.checkPause);
          console.log(this.timer);
          if (this.currentLetter === 12) {
            this.placeholderJ9 = this.placeholderJ9.slice(0, -1);
          } else if (this.currentLetter === 4) {
            this.placeholderJ9 = '';
          }
          break;
        case 38:
          // up
          if (this.currentLetter !== 1 && this.currentLetter !== 5 && this.currentLetter !== 9) {
            this.currentLetter--;
          }
          break;
        case 40:
          // down
          if (this.currentLetter !== 4 && this.currentLetter !== 8 && this.currentLetter !== 12) {
            this.currentLetter++;
          }
          break;
        case 39:
          // right
          if (this.currentLetter < 9) {
            this.currentLetter += 4;
          }
          break;
        case 37:
          // left
          if (this.currentLetter > 4) {
            this.currentLetter -= 4;
          } else {
            this.$emit('left');
          }
          break;
        default: break;
      }
    },
    J9(event) {
    },
  },
};
</script>
<style lang="scss" scoped>

#container{
  display: flex;
  flex-direction: column;
}

input{
  width: 50%;
  background-color: #efefef;;
  opacity: 50%;
  border-radius: 5px;
  color: rgba(0,0,0,0.6);
  font-size: 150%;
  padding: 2%;
  box-shadow: inset 2px 2px 2px 2px grey;
  box-sizing: border-box;
  border-radius: 5px;
}

#J9Keyboard{
  padding-top: 3px;
  font-size: 2vw;
  display: flex;
  justify-content: space-around;
}

#letters{
  width: 50%;
  height: 50%;
  background-color: #efefef;
  border-radius: 5px;
  column-count: 3;
  column-gap: 0px;
}

#listLetter{
  padding: 15% 0% 15% 0%;
  border-radius: 5px;
  outline: 3px solid #E5E5E5;
}

#legend{
  display: flex; 
  justify-content: space-around;
  width: 25%;
  margin: auto;
  align-items: center;
}

#legendImg{
  height: 1.5vh;
  filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
}

#playPause{
  display: flex;
}

#legendInfo{
  font-size: 2vw;
  margin: 0 1% 0 3%;
}

img{
  padding: 1%;
  border-radius: 5px;
}

.active-letter {
  align-content: space-between;
  background-color:#7540c4;
  color: #C5C5C5;
  border-radius: 5px;
  transition: 0.3s;
}

</style>
