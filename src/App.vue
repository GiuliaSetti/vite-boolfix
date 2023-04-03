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

  created() {
        
            let popularMovieAPI = this.store.APIs.APIbase + this.store.APIs.popularMovie + this.store.APIs.APIkey;

            axios.get(popularMovieAPI).then((res) => {

                this.store.moviesList = res.data.results;
                console.log(res.data.results);

            });

            let popularSeriesAPI = this.store.APIs.APIbase + this.store.APIs.popularSeries + this.store.APIs.APIkey;
            
            axios.get(popularSeriesAPI).then((res) => {

                this.store.tvSeriesList = res.data.results;
                console.log(res.data.results);

            });
    },


  methods:{

    search() {

          // per film
          let APIMovieCall = this.store.APIs.APIbase + this.store.APIs.movieAPI + this.store.APIs.APIkey + this.store.APIs.query + this.store.inputText;

          axios.get(APIMovieCall).then((response) =>{
            console.log(response.data.results);

            this.store.moviesList = response.data.results;
          });

          // per serie tivvi
          let APISeriesCall = this.store.APIs.APIbase + this.store.APIs.tvSeriesAPI + this.store.APIs.APIkey + this.store.APIs.query + this.store.inputText;

          axios.get(APISeriesCall).then((response) =>{
            console.log(response.data.results);

            this.store.tvSeriesList = response.data.results;
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
