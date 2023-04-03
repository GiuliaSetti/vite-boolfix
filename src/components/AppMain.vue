<script>

// importo lo store e axios
import { store } from '../store';

// importo la singola copertina
import MediaItem from '../components/MediaItem.vue'
import AppEmptyPage from './AppEmptyPage.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },

    components:{
        MediaItem,
        AppEmptyPage
    }
}
</script>


<template>

    <main>

        <div class="container">
            
                   
                    <div v-if="store.moviesList != 0">
                        <h2 class="categories_title">Movies</h2>

                        <div id="movie_container">

                            <MediaItem v-for="movie in store.moviesList" :media="movie"></MediaItem>
                            
                        </div>
            
                    </div>
  
                 
                    <div v-if="store.tvSeriesList != 0" >
            
                        <h2 class="categories_title">Tv Series</h2>

                        <div id="series_container" >

                            <MediaItem v-for="tvserie in store.tvSeriesList" :media="tvserie"></MediaItem>

                        </div>
                    

                    </div>

                    <AppEmptyPage v-else></AppEmptyPage>

        </div>


    </main>

</template>


<style lang="scss">


@use "../scss/mixin" as *;
@use "../scss/variables" as *;

    main{
        background-color: $secondColor;

        height: calc(100% - 80px);

        margin-top: 80px;

        padding: 1rem 3rem;

        .container{

            height: 100%;
            overflow-y: auto;
            padding: 0.4rem;
            
                .categories_title{
                        color: rgba(255, 255, 255, 0.557);
                        padding: 10px;  
                }

                #movie_container{

                    @include dRow();

                    padding: 20px;
                    gap: 20px;

                    overflow-x: auto;
                }

                #series_container{

                    @include dRow();

                    padding: 20px;
                    gap: 20px;

                    overflow-x: auto;
                }

        }


      
       
    }


</style>