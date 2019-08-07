<template>
<div id='container'>

  <!-- <div id='inputT99'> -->
    <input type='text' v-model='placeholderT9' id='inputT9' placeholder= 'movie, tv, actor'>
  <!-- </div> -->

  <div id='T9Keyboard'>

    <div id='letters' @keydown='T9'> 
      <ul id='listLetter' v-for='letter in letters' :key='letter.id' :class='{"active-letter": currentLetter === letter.id}'>
          {{letter.text}}
          <img v-if='letter.id % 4 == 0' id='legendImg' v-bind:src='letter.src'>
          <img v-if='letter.id == 8' id='legendImg' src='/static/image/icon_pauseVideo.png'>
      </ul>
    </div>

  </div>

  <!-- <div id='legend'> -->

    <!-- <span id='legendInfo'>clear</span> -->
    <!-- <img id='legendImg' src='/static/image/icon_RWx2.png'> -->
    <!-- <span id='legendInfo'>space</span> -->
    <!-- <div id='playPause'>
      <img id='legendImg' src='/static/image/icon_playVideo.png'>
      <img id='legendImg' src='/static/image/icon_pauseVideo.png'>
    </div> -->
    <!-- <span id='legendInfo'>delete</span> -->
    <!-- <img id='legendImg' src='/static/image/icon_FFx2.png'> -->
    <!-- <img id='legendImg' src='/static/image/icon_replay.png'> -->
    <!-- <span id='legendInfo'>back</span> -->
    <!-- <img src='static/image/Icon_Back_MH.png'>  -->
    <!-- <span id='legendInfo'>home</span> -->
    <!-- <img src='static/image/Icon_Home_MH.png'> -->

  <!-- </div> -->
  

</div>
</template>

<script>
import KeyboardController from '../KeyController';

export default {
  name: 'T9Keyboard',
  components: {
    KeyboardController,
  },
  data() {
    return {
      stillPressingEnter: true,
      i: -1,
      placeholderT9: '',
      img: Image,
      timer: 0,
      pause: 0,
      difTolerance: 350,
      startTime: 0,
      endTime: 0,
      currentLetter: 1,
      letters: [
        { id: 1, text: 'y w g', textArray: ['y', 'w', 'g'] },
        { id: 2, text: 'c m f', textArray: ['c', 'm', 'f'] },
        { id: 3, text: 'j z q', textArray: ['j', 'z', 'q'] },
        { id: 4, text: 'Clear', textArray: ['', '', ''], src: '/static/image/icon_RWx2.png' },
        { id: 5, text: 'o i n', textArray: ['o', 'i', 'n'] },
        { id: 6, text: 'e t a', textArray: ['e', 't', 'a'] },
        { id: 7, text: 'd l u', textArray: ['d', 'l', 'u'] },
        { id: 8, text: 'Space', textArray: [' ', ' ', ' '], src: '/static/image/icon_playVideo.png' },
        { id: 9, text: 'p b v', textArray: ['p', 'b', 'v'] },
        { id: 10, text: 's r h', textArray: ['s', 'r', 'h'] },
        { id: 11, text: 'k x .', textArray: ['k', 'x', '.'] },
        { id: 12, text: 'Delete', textArray: ['', '', ''], src: '/static/image/icon_replay.png' },
      ],
    };
  },
  mounted() {
    document.addEventListener('keydown', this.T9);
  },
  methods: {
    timerFunc() {
      this.stillPressingEnter = false;
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
          this.placeholderT9 = this.placeholderT9.slice(0, -1);
          break;
        case 73:
          // i = clear
          this.placeholderT9 = '';
          break;
        case 32:
          // space = space
          this.placeholderT9 += ' ';
          break;
        case 13:
          // enter
          if (this.stillPressingEnter) {
            // delete the last character
            this.placeholderT9 = this.placeholderT9.slice(0, -1);
          }
          this.stillPressingEnter = true;
          this.i = (this.i + 1) % 3;
          this.placeholderT9 += (this.letters[this.currentLetter - 1].textArray[this.i]);
          this.startTime = new Date().getTime();
          console.log(this.i, 'this is i');
          this.timer = setInterval(this.checkPause);
          console.log(this.timer);
          if (this.currentLetter === 12) {
            this.placeholderT9 = this.placeholderT9.slice(0, -1);
          } else if (this.currentLetter === 4) {
            this.placeholderT9 = '';
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
    T9(event) {
    },
  },
};
</script>
<style lang="scss" scoped>

#container{
  display: flex;
  flex-direction: column;
  // align-self: left;
  margin-left: 4.85vw;
}

input{
  width: 65%;
  background-color: rgba(255, 255, 255, 0.4);
  // opacity: 50%;
  border-radius: 5px;
  color: white;
  font-size: 200%;
  padding: 2% 0% 2% 6.5%;
  box-shadow: inset 2px 2px 0px 0px black;
  box-sizing: border-box;
  border-radius: 5px;
  text-transform: lowercase;
  // font-family: GothamBookLat;
  // placeholder{
  //   color: white;
  // }
}
  ::placeholder{
    color: white;
    opacity: 0.6;
  }

#T9Keyboard{
  padding-top: 3px;
  font-size: 200%;
  display: flex;
  justify-content: space-between;
}

#letters{
  width: 65%;
  // height: 60%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #efefef;
  border-radius: 10px;
  column-count: 3;
  column-gap: 0px;
  font-weight: bold;
  margin-top: 2vh;
  // overflow: hidden;
}

#listLetter{
  padding: 15% 0% 15% 0%;
  justify-content: space-between !important;
  // border-radius: 5px;
  // outline: 3px solid #E5E5E5;
  outline: rgba(255, 255, 255, 1);
  // border: 0.5px solid black;
  // border: 5px solid black;
  box-sizing: border-box;
  border: 0.5px solid black;
}

#legendImg{
  height: 1.5vh;
  opacity: 0.8;
  // margin-top: 5px !important; 
  // width: 1.5vw;
  // filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
  // background-color: rgba(255, 255, 255, 1);
}

.active-letter {
  align-content: space-between;
  background-color:#efefef;
  color: black;
  // border-radius: 10px;
  // box-sizing: border-box;
  // border: 0.5px solid black;
  // border: 1px solid black;
  // border-radius: 5px;
  transition: 0.3s;
  // box-shadow: 0 0 5px black;
  // transform: scale(1.1);
  // filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
  #legendImg{
    filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
  }
}

</style>
