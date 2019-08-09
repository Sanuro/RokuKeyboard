<template>
<div id='abc-container'>
  <input type='text' v-model='placeholderJ9' id='input-abc' placeholder= 'movie, tv, actor'>
  <div id='abc-keyboard'>
    <div class='letters'> 
      <div class='listLetter' v-for='letter in letters' :key='letter.id' :class='{"active-letter": currentLetter === letter.id}'>
          <div class='alphaNumButton' v-if="letter.text">{{letter.text}}</div>
          <img v-if='letter.src' class='legendImg' v-bind:src='letter.src'>
      </div>
    </div>
  </div>
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
  props: {
    focused: Boolean,
  },
  data() {
    return {
      i: 0,
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
        { id: 2, text: 'b', textArray: ['b'] },
        { id: 3, text: 'c', textArray: ['c'] },
        { id: 4, text: 'd', textArray: ['d'] },
        { id: 5, text: 'e', textArray: ['e'] },
        { id: 6, text: 'f', textArray: ['f'] },

        { id: 7, text: 'g', textArray: ['g'] },
        { id: 8, text: 'h', textArray: ['h'] },
        { id: 9, text: 'i', textArray: ['i'] },
        { id: 10, text: 'j', textArray: ['j'] },
        { id: 11, text: 'k', textArray: ['k'] },
        { id: 12, text: 'l', textArray: ['l'] },

        { id: 13, text: 'm', textArray: ['m'] },
        { id: 14, text: 'n', textArray: ['n'] },
        { id: 15, text: 'o', textArray: ['o'] },
        { id: 16, text: 'p', textArray: ['p'] },
        { id: 17, text: 'q', textArray: ['q'] },
        { id: 18, text: 'r', textArray: ['r'] },

        { id: 19, text: 's', textArray: ['s'] },
        { id: 20, text: 't', textArray: ['t'] },
        { id: 21, text: 'u', textArray: ['u'] },
        { id: 22, text: 'v', textArray: ['v'] },
        { id: 23, text: 'w', textArray: ['w'] },
        { id: 24, text: 'x', textArray: ['x'] },

        { id: 25, text: 'y', textArray: ['y'] },
        { id: 26, text: 'z', textArray: ['z'] },
        { id: 27, text: '0', textArray: ['0'] },
        { id: 28, text: '1', textArray: ['1'] },
        { id: 29, text: '2', textArray: ['2'] },
        { id: 30, text: '3', textArray: ['3'] },

        { id: 31, text: '4', textArray: ['4'] },
        { id: 32, text: '5', textArray: ['5'] },
        { id: 33, text: '6', textArray: ['6'] },
        { id: 34, text: '7', textArray: ['7'] },
        { id: 35, text: '8', textArray: ['8'] },
        { id: 36, text: '9', textArray: ['9'] },

        { id: 37, text: '', textArray: [''], src: '/static/image/icon_clear.png' },
        { id: 38, text: '', textArray: [' '], src: '/static/image/icon_space.png' },
        { id: 39, text: '', textArray: [''], src: '/static/image/icon_delete.png' },
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
      this.i = -1;
    },
    checkPause() {
      // this.endTime = new Date().getTime();
      if (this.endTime - this.startTime >= this.difTolerance) {
        clearTimeout(this.timer);
        this.timerFunc();
        // console.log('clearing timer');
      }
    },
    keyDownHandler(keyCode) {
      // clearTimeout(this.timer);
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
          // this.startTime = new Date().getTime();
          this.placeholderJ9 += (this.letters[this.currentLetter - 1].textArray[this.i]);
          console.log(this.placeholderJ9, 'this is placeholderJ9');
          // this.i = -1;
          // this.i = (this.i + 1) % 3;
          // this.timer = setInterval(this.checkPause);
          // document.getElementsByClassName(this.currentLetter).className = 'indent';
          if (this.currentLetter === 39) {
            this.placeholderJ9 = this.placeholderJ9.slice(0, -1);
            console.log('inside delete enter');
          } else if (this.currentLetter === 37) {
            this.placeholderJ9 = '';
          }
          break;
        case 38:
          // up
          if (this.currentLetter > 6 && this.currentLetter < 37) {
            this.currentLetter -= 6;
          } else if (this.currentLetter === 37) {
            this.currentLetter = 31;
          } else if (this.currentLetter === 38) {
            this.currentLetter = 33;
          } else if (this.currentLetter === 39) {
            this.currentLetter = 35;
          }
          break;
        case 40:
          // down
          if (this.currentLetter < 32) {
            this.currentLetter += 6;
          } else if (this.currentLetter === 32) {
            this.currentLetter = 37;
          } else if (this.currentLetter === 33 || this.currentLetter === 34) {
            this.currentLetter = 38;
          } else if (this.currentLetter === 35 || this.currentLetter === 36) {
            this.currentLetter = 39;
          }
          break;
        case 39:
          // right
          if (this.currentLetter < 39 && this.currentLetter % 6 !== 0) {
            this.currentLetter += 1;
          }
          break;
        case 37:
          // left
          if (this.currentLetter % 6 !== 1) {
            this.currentLetter -= 1;
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

#abc-container{
  display: flex;
  flex-direction: column;
  // align-self: left;

  margin-left: 4.85vw;
  width: 24vw;
  margin-right: 17vw;
}

input#input-abc{
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

  &::placeholder{
    color: white;
    opacity: 0.6;
  }
}

#abc-keyboard{
  width: 100%;
  padding-top: 3px;
  font-size: 2vw;
  display: block;
  justify-content: space-between;
}

.letters{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #efefef;
  border-radius: 10px;
  column-gap: 0px;
  font-weight: bold;
  margin-top: 2vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
}

#keyboardClrSpcDel{
  justify-content: space-around;
  display: flex;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #efefef;
  border-radius: 10px;
  column-count: 3;
  column-gap: 0px;
  font-weight: bold;
}

.listLetter{
  height: 4.2vw;
  line-height: 4.2vw;
  width: 4vw;
  outline: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border: 0.5px solid black;
  img{
    margin-top: -.2em;
    vertical-align: middle;
  }
  &:last-child, &:nth-last-child(2), &:nth-last-child(3){
    width: 8vw;
  }
}

.legendImg{
  width: 2.5vw;
  // height: 1.5vh;
  opacity: 0.8;
}

.active-letter {
  align-content: space-between;
  background-color:#efefef;
  color: black;
  transition: 0.3s;
  .legendImg{
    filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
  }
  .indent{
    transition: 0.4s;
    transform: scale(0.5) !important;
  }
}

</style>
