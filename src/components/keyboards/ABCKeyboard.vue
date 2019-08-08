<template>
<div id='container'>

  <!-- <div id='inputJ99'> -->
    <input type='text' v-model='placeholderJ9' id='inputJ9' placeholder= 'movie, tv, actor'>
  <!-- </div> -->

  <div id='J9Keyboard'>

    <div id='letters'> 
      <ul id='listLetter' v-for='letter in letters' :key='letter.id' :class='{"active-letter": currentLetter === letter.id}'>
          <span v-if="letter.id%7 != 0">{{letter.text}}</span>
          <span v-if="letter.id%7 == 0">{{letter.text}}</span>
          <!-- <img v-if='letter.id % 4 == 0' id='legendImg' v-bind:src='letter.src'> -->
          <!-- <img v-if='letter.id == 8' id='legendImg' src='/static/image/icon_pauseVideo.png'> -->
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
// tslint:disable-next-line:max-line-length
import KeyboardController from '../KeyController';

export default {
  name: 'ABCKeyboard',
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
      difTolerance: 0,
      startTime: 0,
      endTime: 0,
      currentLetter: 1,
      letters: [
        { id: 1, text: 'a', textArray: ['a'] },
        { id: 2, text: 'g', textArray: ['g'] },
        { id: 3, text: 'm', textArray: ['m'] },
        { id: 4, text: 's', textArray: ['s'] },
        { id: 5, text: 'y', textArray: ['y'] },
        { id: 6, text: '4', textArray: ['4'] },
        { id: 7, text: 'Clear', textArray: ['', '', ''] },
        // { id: 4, text: 'Clear', textArray: ['', '', ''], src: '/static/image/icon_RWx2.png' },

        { id: 8, text: 'b', textArray: ['b'] },
        { id: 9, text: 'h', textArray: ['h'] },
        { id: 10, text: 'n', textArray: ['n'] },
        { id: 11, text: 't', textArray: ['t'] },
        { id: 12, text: 'z', textArray: ['z'] },
        { id: 13, text: '5', textArray: ['5'] },
        { id: 14, text: '_', textArray: ['', '', ''], src: '/static/image/icon_RWx2.png' },

        { id: 15, text: 'c', textArray: ['c'] },
        { id: 16, text: 'i', textArray: ['i'] },
        { id: 17, text: 'o', textArray: ['o'] },
        { id: 18, text: 'u', textArray: ['u'] },
        { id: 19, text: '0', textArray: ['0'] },
        { id: 20, text: '6', textArray: ['6'] },
        { id: 21, text: 'Space', textArray: [' '] },
        // { id: 8, text: 'Space', textArray: [' ', ' ', ' '], src: '/static/image/icon_playVideo.png' },

        { id: 22, text: 'd', textArray: ['d'] },
        { id: 23, text: 'j', textArray: ['j'] },
        { id: 24, text: 'p', textArray: ['p'] },
        { id: 25, text: 'v', textArray: ['v'] },
        { id: 26, text: '1', textArray: ['1'] },
        { id: 27, text: '7', textArray: ['7'] },
        { id: 28, text: '_', textArray: [' '] },
        // { id: 8, text: 'Space', textArray: [' ', ' ', ' '], src: '/static/image/icon_playVideo.png' },

        { id: 29, text: 'e', textArray: ['e'] },
        { id: 30, text: 'k', textArray: ['k'] },
        { id: 31, text: 'q', textArray: ['q'] },
        { id: 32, text: 'w', textArray: ['w'] },
        { id: 33, text: '2', textArray: ['2'] },
        { id: 34, text: '8', textArray: ['8'] },
        { id: 35, text: 'Delete', textArray: [' '] },
        // { id: 12, text: 'Delete', textArray: ['', '', ''], src: '/static/image/icon_replay.png' },

        { id: 36, text: 'f', textArray: ['f'] },
        { id: 37, text: 'l', textArray: ['l'] },
        { id: 38, text: 'r', textArray: ['r'] },
        { id: 39, text: 'x', textArray: ['x'] },
        { id: 40, text: '3', textArray: ['3'] },
        { id: 41, text: '9', textArray: ['9'] },
        { id: 42, text: '_', textArray: [' '] },
        // { id: 12, text: 'Delete', textArray: ['', '', ''], src: '/static/image/icon_replay.png' },

      ],
      // keyboardFunctions: [
      //   { id: 1, text: 'Clear', textArray: [''] },
      //   { id: 2, text: 'Space', textArray: [' '] },
      //   { id: 3, text: 'Delete', textArray: [' '] },
      // ],
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
          // document.getElementsByClassName(this.currentLetter).className = 'indent';
          if (this.currentLetter === 35 || this.currentLetter === 42) {
            this.placeholderJ9 = this.placeholderJ9.slice(0, -1);
          } else if (this.currentLetter === 7 || this.currentLetter === 14) {
            this.placeholderJ9 = '';
          }
          break;
        case 38:
          // up
          if (this.currentLetter % 7 !== 1) {
            this.currentLetter--;
          }
          break;
        case 40:
          // down
          if (this.currentLetter % 7 !== 0) {
            this.currentLetter++;
          }
          break;
        case 39:
          // right
          if (this.currentLetter < 36) {
            this.currentLetter += 7;
          }
          break;
        case 37:
          // left
          if (this.currentLetter > 7) {
            this.currentLetter -= 7;
          } else {
            this.$emit('left');
          }
          break;
        default: break;
      }
    },
    // J9(event) {
    // },
  },
};
</script>
<style lang="scss" scoped>

#container{
  display: flex;
  flex-direction: column;
  // align-self: left;
  margin-left: 4.85vw;
  // width: 100%;
}

input{
  width: 65%;
  background-color: rgba(255, 255, 255, 0.4);
  // opacity: 50%;
  border-radius: 5px;
  color: white;
  font-size: 200%;
  padding: 2% 0% 2% 4%;
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

#J9Keyboard{
  padding-top: 3px;
  font-size: 200%;
  display: block;
  justify-content: space-between;
}

#letters{
  width: 65%;
  // height: 70%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #efefef;
  border-radius: 10px;
  column-count: 6;
  column-gap: 0px;
  font-weight: bold;
  margin-top: 2vh;
  // display: flex;
  // overflow: hidden;
}

#keyboardClrSpcDel{
  justify-content: space-around;
  display: flex;
  width: 65%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #efefef;
  border-radius: 10px;
  column-count: 3;
  column-gap: 0px;
  font-weight: bold;
  // margin-top: 2vh;
  // overflow: hidden;
}

#listLetter{
  padding: 19% 0% 19% 0%;
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
  transition: 0.3s;
  #legendImg{
    filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
  }
  .indent{
    transition: 0.4s;
    transform: scale(0.5) !important;
  }
  
}



</style>
