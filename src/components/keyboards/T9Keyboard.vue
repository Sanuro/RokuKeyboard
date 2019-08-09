<template>
<div id='t9-container' >
  <input type='text' v-model='placeholderT9' id='inputT9' placeholder= 'movie, tv, actor'>
  <div id='T9Keyboard'>
    <div class='letters' @keydown='T9'> 
      <ul class='listLetter' v-for='letter in letters' :key='letter.id' :class='{"active-letter":  currentLetter === letter.id}'>
          <span v-if='letter.id % 4 !== 0' :class='{"make-bold": i === 0 && currentLetter === letter.id}'>{{letter.text[0]}}</span>
          <span v-if='letter.id % 4 !== 0' :class='{"make-bold": i === 1 && currentLetter === letter.id}'>{{letter.text[2]}}</span>
          <span v-if='letter.id % 4 !== 0' :class='{"make-bold": i == 2 && currentLetter === letter.id}'>{{letter.text[4]}}</span>

          <span v-if='letter.id % 4 === 0'>{{letter.text}}</span><br>
          <img v-if='letter.src' class='legendImg' :class="{rewind: letter.id === 12}" v-bind:src='letter.src'>
          <img v-if='letter.id == 8' class='legendImg' src='/static/image/icon_pauseVideo.png'>
      </ul>
    </div>
  </div> 
</div>
</template>

<script>
import KeyboardController from '../KeyController';

export default {
  name: 'T9Keyboard',
  components: {
    KeyboardController,
  },
  props: {
    // focused: Boolean,
  },
  data() {
    return {
      stillPressingEnter: true,
      i: -1,
      placeholderT9: '',
      img: Image,
      timer: 0,
      pause: 0,
      difTolerance: 400,
      startTime: 0,
      endTime: 0,
      currentLetter: 1,
      pressedEnterAfterMoving: false,
      letters: [
        { id: 1, text: 'a b c', textArray: ['a', 'b', 'c'] },
        { id: 2, text: 'j k l', textArray: ['j', 'k', 'l'] },
        { id: 3, text: 's t u', textArray: ['s', 't', 'u'] },
        { id: 4, text: 'Clear', textArray: ['', '', ''], src: '/static/image/icon_RWx2.png' },
        { id: 5, text: 'd e f', textArray: ['d', 'e', 'f'] },
        { id: 6, text: 'm n o', textArray: ['m', 'n', 'o'] },
        { id: 7, text: 'v w x', textArray: ['v', 'w', 'x'] },
        { id: 8, text: 'Space', textArray: [' ', ' ', ' '], src: '/static/image/icon_playVideo.png' },
        { id: 9, text: 'g h i', textArray: ['g', 'h', 'i'] },
        { id: 10, text: 'p q r', textArray: ['p', 'q', 'r'] },
        { id: 11, text: 'y z .', textArray: ['y', 'z', '.'] },
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
          if (this.stillPressingEnter && this.pressedEnterAfterMoving) {
            // delete the last character
            this.placeholderT9 = this.placeholderT9.slice(0, -1);
          }
          this.pressedEnterAfterMoving = true;
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
          this.pressedEnterAfterMoving = false;
          this.i = -1;
          if (this.currentLetter !== 1 && this.currentLetter !== 5 && this.currentLetter !== 9) {
            this.currentLetter--;
          }
          break;
        case 40:
          // down
          this.pressedEnterAfterMoving = false;
          this.i = -1;
          if (this.currentLetter !== 4 && this.currentLetter !== 8 && this.currentLetter !== 12) {
            this.currentLetter++;
          }
          break;
        case 39:
          // right
          this.pressedEnterAfterMoving = false;
          this.i = -1;
          if (this.currentLetter < 9) {
            this.currentLetter += 4;
          }
          break;
        case 37:
          this.i = -1;
          this.pressedEnterAfterMoving = false;
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

#t9-container{
  display: flex;
  flex-direction: column;
  margin-left: 4.85vw;
  width: 24vw;
  margin-right: 17vw;
}

input#inputT9{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  color: white;
  font-size: 2vw;
  padding: 2% 0% 2% 6.5%;
  box-shadow: inset 2px 2px 0px 0px black;
  box-sizing: border-box;
  border-radius: 5px;
  text-transform: lowercase;
}
  ::placeholder{
    color: white;
    opacity: 0.6;
  }

#T9Keyboard{
  font-size: 2vw;
  display: flex;
  justify-content: space-between;
}

.letters{
  width: 100%;
  // height: 60%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #efefef;
  border-radius: 10px;
  column-count: 3;
  column-gap: 0px;
  font-weight: bold;
  margin-top: 2vh;
}

.listLetter{
  padding: 30% 5%;
  text-align: center;
  // justify-content: space-between !important;
  outline: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border: 0.5px solid black;
}

.legendImg{
  height: 1.5vh;
  opacity: 0.8;
  &.rewind{
    height: 3vh;
  }
}

.active-letter {
  align-content: space-between;
  background-color:#efefef;
  color: black;
  // transform: scale(0.90);
  transition: 0.3s;
  #legendImg{
    filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
  }
}

.make-bold {
  position: relative;
  // font-size: 3vw;
  // font-weight: bolder;
  // text-decoration: underline;
  background-color: black;
  color: #efefef;
  // padding: 2px;
  // transition: 0.4s;
  margin: 0% !important;
  border-radius: 5px;
}
</style>
