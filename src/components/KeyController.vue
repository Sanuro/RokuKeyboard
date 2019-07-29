<script>
export default {
  name: 'keyController',

  data() {
    switch (this.$store.state.focus) {
      case 'homeMenu':
        console.log('inside homeMenu');
        break;
      case 'appMenu':
        console.log('inside appMenu');
        break;
      case 'ad':
        console.log('inside ad');
        break;
      case 'modalBox':
        console.log('inside modal');
        break;
      default:
        console.log('defaultblock');
    }
  },
//   computed() {
//     // const storeChange = this.$store.state.focus;
//   },
};

</script>
