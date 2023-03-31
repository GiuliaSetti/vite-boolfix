<script>

// importo lo store e axios
import { store } from '../store';

// importo la singola copertina
import MediaItem from '../components/MediaItem.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },

    components:{
        MediaItem,
    }
}
</script>


<template>

    <main>

        <h2 class="categories_title">Movies</h2>
        <div id="movie_container">
           
            <MediaItem v-for="movie in store.moviesList" :media="movie"></MediaItem>

        </div>

        <h2 class="categories_title">Tv Series</h2>

        <div id="series_container">
           
           <MediaItem v-for="tvserie in store.tvSeriesList" :media="tvserie"></MediaItem>

       </div>


    </main>

</template>


<style lang="scss">


@use "../scss/mixin" as *;
@use "../scss/variables" as *;

    main{
        background-color: $secondColor;

        height: 100%;

        margin-top: 80px;

        padding: 1rem 3rem;

        .categories_title{
                color: rgba(255, 255, 255, 0.557);
                padding: 10px;  
                margin-top: 2rem;
        }

        #movie_container{

            @include dRow();

            padding: 20px;
            gap: 20px;

            overflow-x: auto;
            overflow-y: hidden;

        }

        #series_container{

            @include dRow();

            padding: 20px;
            gap: 20px;

            overflow-x: auto;
            overflow-y: hidden;

        }

      
       
    }


</style>