<script>

  // importo l'header
  import AppHeader from './components/AppHeader.vue'

  // importo il main
  import AppMain from './components/AppMain.vue'

  // importo lo store e axios
  import { store } from './store';
  import axios from 'axios';


  export default {

  name: 'App',
  data() {

    return {
      store,
    }
    
  },


  components: {
    AppHeader,
    AppMain,
  },



}


</script>

<template>

  <AppHeader></AppHeader>
  <AppMain></AppMain>
  
</template>

<style lang="scss" scoped>

</style>
