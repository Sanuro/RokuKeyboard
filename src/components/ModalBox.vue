<template>

  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <!-- Keyboards (press 'esc' to close) -->

          </slot>
        </header>

        <section v-bind:class="{'active': isActive}" class="modal-body" id="modalDescription">
          <!-- <div id='selectedOption'>hello</div> -->

          <slot id='ABCKeyboard' name="body">
            <!-- ABCKeyboard -->
          </slot>

          <slot id='T9Keyboard' name="body">
            <!-- T9Keyboard -->
          </slot>
          
          <slot id='J9Keyboard' name="body">
            J9Keyboard
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <!-- Footer -->
            <component ref='J9KeyboardRef' :is="keybaordMode" id='ModalJ9Keyboard'/>
            
          </slot>
        </footer>
      </div>
    </div>
  </transition>



</template>
<script>
import J9 from '../components/keyboards/J9Keyboard';
import T9 from '../components/keyboards/T9Keyboard';

export default {
  // name: 'ModalBox',
  name: 'modal',
  components: {
    J9,
    T9,
  },
  data() {
    return {
      isActive: false,
      keybaordMode: 'J9',
    };
  },
  beforeMount() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  methods: {
    onKeyDown(e) {
      this.$refs.J9KeyboardRef.keyDownHandler(e.keyCode);
    },
  },
};
</script>

<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #e5e5e5;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 90vh;
    overflow: hidden;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    // display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: space-between;
  }

  .modal-body {
    position: relative;
    // justify-content: space-between;
    padding: 20px 10px;
  }
  .active {
    outline: 5px solid purple;
  }

  // .btn-close {
  //   border: none;
  //   font-size: 20px;
  //   padding: 20px;
  //   cursor: pointer;
  //   font-weight: bold;
  //   color: #4AAE9B;
  //   background: transparent;
  // }

  // .btn-green {
  //   color: white;
  //   background: #4AAE9B;
  //   border: 1px solid #4AAE9B;
  //   border-radius: 2px;
  // }
</style>
