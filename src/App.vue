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


  methods:{

    search() {

          let APIcall = this.store.APIs.APIbase + this.store.APIs.movieAPI + this.store.APIs.APIkey + this.store.APIs.query + this.store.inputText;

          axios.get(APIcall).then((response) =>{
            console.log(response.data.results);

            this.store.moviesList = response.data.results;
          });


    }


  }
 
}


</script>

<template>

  <AppHeader  @search="search()"></AppHeader>
  <AppMain></AppMain>
  
</template>

<style lang="scss" scoped>

</style>
