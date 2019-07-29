<template>
<div id='container'>

  <div id='inputJ99'>
    <input type='text' v-model='placeholderJ9' id='inputJ9' placeholder= 'Search' >
  </div>

  <div id='J9Keyboard'>

    <div id='letters' v-if='showJ9Keyboard === 0' @keydown='J9'>
      <ul v-for='letter in letters' :key='letter.id' :class='{"active-letter": currentLetter === letter.id}'>
        <!-- <li> -->
          {{letter.text}}
        <!-- </li> -->
      </ul>
    </div>

  </div>

  <div id='legend'>

    <span id='legendInfo'>clear</span>
    <img src='/static/image/icon_replay.png'>
    <span id='legendInfo'>space</span>
    <img src='/static/image/icon_playVideo.png'>
    <img src='/static/image/icon_pauseVideo.png'>
    <span id='legendInfo'>delete</span>
    <img src='/static/image/icon_RWx2.png'>
    <!-- <span id='legendInfo'>back</span>
    <img src='static/image/Icon_Back_MH.png'> -->
    <!-- <span id='legendInfo'>home</span>
    <img src='static/image/Icon_Home_MH.png'> -->

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
      i: 0,
      placeholderJ9: '',
      showJ9Keyboard: 0,
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
        { id: 4, text: 'D E F', textArray: ['D', 'E', 'F'] },
        { id: 5, text: 'M N O', textArray: ['M', 'N', 'O'] },
        { id: 6, text: 'V W X', textArray: ['V', 'W', 'X'] },
        { id: 7, text: 'G H I', textArray: ['G', 'H', 'I'] },
        { id: 8, text: 'P Q R', textArray: ['P', 'Q', 'R'] },
        { id: 9, text: 'Y Z .', textArray: ['Y', 'Z', '.'] },
      ],
    };
  },
  mounted() {
    document.addEventListener('keydown', this.J9);
  },
  methods: {
    J9(event) {
      if (event.keyCode === 8) {
        this.placeholderJ9 = this.placeholderJ9.slice(0, -1);
        //  backspace clear rewind
      }
      if (event.keyCode === 67) {
        this.placeholderJ9 = '';
        //  c delete backtrack
      }
      if (event.keyCode === 32) {
        this.placeholderJ9 += '_';
        // space space play/pause
      }
      if (event.keyCode === 13) {
        // for (i; i < this.letters[this.currentLetter - 1].textArray.length; i++) {
        // }
        // i++;
        this.placeholderJ9 += (this.letters[this.currentLetter - 1].textArray[this.i]);
        console.log(this.placeholderJ9);
        this.i = (this.i + 1) % 3;
      } else {
        this.i = 0;
        if (event.keyCode === 38) {
          if (this.currentLetter !== 1 && this.currentLetter !== 4 && this.currentLetter !== 7) {
            this.currentLetter--;
            console.log('upping', this.currentLetter);
          }
        } else if (event.keyCode === 40) {
          if (this.currentLetter !== 3 && this.currentLetter !== 6 && this.currentLetter !== 9) {
            this.currentLetter++;
          }
          console.log('downing');
        } else if (event.keyCode === 39) {
          console.log('right');
          if (this.currentLetter < 7) {
            this.currentLetter += 3;
          }
        } else if (event.keyCode === 37) {
          console.log('left');
          if (this.currentLetter > 3) {
            this.currentLetter -= 3;
          }
        }
      }
      // if (this.$store.state.isKeyboardModal === false) {
    },
  },
};
</script>
<style lang="scss" scoped>

input{
  // justify-content: space-between;
  width: 80%;
  border: 2px solid #6C3B97;
  background-color: rgba(153, 12, 196, 0.39);
  opacity: 50%;
  border-radius: 5px;
  // padding: 10%;
  color: white;
  font-size: 150%;
  padding: 2%;
  box-shadow: inset 0px 0px 5px black;
  // padding-bottom: 30%;
}

#J9Keyboard{
  padding-top: 5vh;
  // height: 100vh;
  width: 100%;
  column-count: 3;
  font-size: 2vw;
  // margin-right: 40vw;
  // display: block;
  // padding-bottom: 5vh;
  // margin-bottom: 5vh;
  // display: flex;
}
#legend{
  display: flex; 
  margin-top: 5vh;
  justify-content: center;
  // padding-right: 40vw
  // justify-content: flex-start;
  // position: relative;
  // justify-content: flex-start;
  // background-color: purple;
}

#legendInfo{
  font-size: 2vw;
  margin: 0 1% 0 3%;
  // padding: 0 3% 0 3%;
}

img{
  background-color: black;
  padding: 1%;
  border-radius: 5px;
  // column-count: 3;
  // display: flex;
}

// .letters{
//   background-color: purple;
// }


.active-letter {
  // padding: 5px;
  // transform: scale(1.1);
  align-content: space-between;
  background-color: rgba(153, 12, 196, 0.39);
  color: white;
  // box-shadow: inset 0px 0px 3px black;
  border-radius: 5px;
  // box-shadow: 1px 1px 5px black;
  // justify-content: start;
}


</style>
