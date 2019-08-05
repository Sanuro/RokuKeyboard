<template>
<div id='container'>

  <div id='inputJ99'>
    <input type='text' v-model='placeholderJ9' id='inputJ9' placeholder= 'Search'>
  </div>

  <div id='J9Keyboard'>

    <div id='letters' @keydown='J9'> 
      <ul id='listLetter' v-for='letter in letters' :key='letter.id' :class='{"active-letter": currentLetter === letter.id}'>
          {{letter.text}}
          {{letter.img}}
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
      // setTimeoutHandle: '',
      timer: 0,
      pause: 0,
      difTolerance: 350,
      startTime: 0,
      endTime: 0,
      // showJ9Keyboard: 0,
      currentLetter: 1,
      // letters: [
      //   { id: 1, text: 'Y W G', textArray: ['Y', 'W', 'G'] },
      //   { id: 2, text: 'C M F', textArray: ['C', 'M', 'F'] },
      //   { id: 3, text: 'J Z Q', textArray: ['J', 'Z', 'Q'] },
      //   { id: 4, text: 'O I N', textArray: ['O', 'I', 'N'] },
      //   { id: 5, text: 'E T A', textArray: ['E', 'T', 'A'] },
      //   { id: 6, text: 'D L U', textArray: ['D', 'L', 'U'] },
      //   { id: 7, text: 'P B V', textArray: ['P', 'B', 'V'] },
      //   { id: 8, text: 'S R H', textArray: ['S', 'R', 'H'] },
      //   { id: 9, text: 'K X .', textArray: ['K', 'X', '.'] },
        // { id: 10, text: 'Del', textArray: ['Del'] },
        // { id: 11, text: 'Space', textArray: ['Del'] },
        // { id: 12, text: 'Clear', textArray: ['Del'] },
      // ],
      letters: [
        { id: 1, text: 'A B C', textArray: ['A', 'B', 'C'] },
        { id: 2, text: 'J K L', textArray: ['J', 'K', 'L'] },
        { id: 3, text: 'S T U', textArray: ['S', 'T', 'U'] },
        { id: 4, text: 'Clear', textArray: ['', '', ''] },
        { id: 5, text: 'D E F', textArray: ['D', 'E', 'F'] },
        { id: 6, text: 'M N O', textArray: ['M', 'N', 'O'] },
        { id: 7, text: 'V W X', textArray: ['V', 'W', 'X'] },
        { id: 8, text: 'Space', textArray: [' ', ' ', ' '] },
        { id: 9, text: 'G H I', textArray: ['G', 'H', 'I'] },
        { id: 10, text: 'P Q R', textArray: ['P', 'Q', 'R'] },
        { id: 11, text: 'Y Z .', textArray: ['Y', 'Z', '.'] },
        { id: 12, text: 'Delete', textArray: ['', '', ''] },
      ],
    };
  },
  mounted() {
    document.addEventListener('keydown', this.J9);
  },
  methods: {
    // grab id from textArray
    // when pressing Enter cycle through the textArray elements
    // have a timer function to register when 'Enter' is no longer being pressed
    // after timer function complets, logs the textArray element into input
    // direction arrow completes timer function
    timerFunc() {
      this.placeholderJ9 += (this.letters[this.currentLetter - 1].textArray[this.i]);
      console.log('letter logged', this.i);
      this.i = -1;
      // not being accessed
    },
    checkPause() {
      this.endTime = new Date().getTime();
      if (this.endTime - this.startTime >= this.difTolerance) {
        clearTimeout(this.timer);
        this.timerFunc();
        console.log('clearing timer');
        // not being accessed
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
          }
          break;
        // case 66:
        //   // b
        //   // this.isModalVisible = false;
        //   this.$store.commit('changeModal', false);
        //   this.$emit('back');
        //   console.log('keypressed b');
        //   break;
        // case 72:
        //   // h
        //   // this.isModalVisible = false;
        //   this.$store.commit('changeModal', false);
        //   break;
        default: break;
      }
    },
    J9(event) {
      // if (event.keyCode === 82) {
      //   this.placeholderJ9 = this.placeholderJ9.slice(0, -1);
      //   //  r delete
      // }
      // if (event.keyCode === 73) {
      //   this.placeholderJ9 = '';
      //   //  i clear
      // }
      // if (event.keyCode === 32) {
      //   this.placeholderJ9 += ' ';
      //   // space space play/pause
      // }
      // clearTimeout(this.timer);
      // if (event.keyCode === 13) {
      //   this.startTime = new Date().getTime();
      //   this.timer = setInterval(this.checkPause);
      //   this.i = (this.i + 1) % 3;
      //   console.log('enter pressed');
      //   // console.log('enter pressed');
      // } else {
      //   this.i = -1;
      //   if (event.keyCode === 38) {
      //     if (this.currentLetter !== 1 && this.currentLetter !== 4 && this.currentLetter !== 7) {
      //       this.currentLetter--;
      //       // console.log('upping', this.i);
      //     }
      //   } else if (event.keyCode === 40) {
      //     if (this.currentLetter !== 3 && this.currentLetter !== 6 && this.currentLetter !== 9) {
      //       this.currentLetter++;
      //     }
      //     // console.log('downing');
      //   } else if (event.keyCode === 39) {
      //     // console.log('right');
      //     if (this.currentLetter < 7) {
      //       this.currentLetter += 4;
      //     }
      //   } else if (event.keyCode === 37) {
      //     // console.log('left');
      //     if (this.currentLetter > 3) {
      //       this.currentLetter -= 4;
      //     }
      //   }
      // }
      // if (this.$store.state.isKeyboardModal === false) {
    },
  },
};
</script>
<style lang="scss" scoped>

#container{
  // position: relative;
  display: flex;
  justify-content: center;
}

input{
  // justify-content: space-between;
  width: 50%;
  // border: 2px solid #6C3B97;
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
  // padding: 10% 5% 10% 5%;
  // margin: 10%;
  border-radius: 5px;
  outline: 3px solid #E5E5E5;
}

#legend{
  display: flex; 
  // margin-top: 10%;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  align-items: center;
}

#legendImg{
  height: 3%;

  filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
}

#playPause{
  display: flex;
}
// #legendPlay{
//   margin-right: 4px; 
//   filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
// }
// #legendPause{
//   margin-left: -2.5vw;
//   filter: invert(1) brightness(50%) sepia(100%) saturate(10000%);
// }
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
  // transform: scale(0.9);
}


</style>
