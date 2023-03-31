<script>

// importo lo store e axios
import { store } from '../store';

// importo la singola copertina
import MovieItem from '../components/MovieItem.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },

    components:{
        MovieItem,
    }
}
</script>


<template>

    <main>
        <h2>Movies</h2>
        <div id="movie_container">
           
            <MovieItem v-for="movie in store.moviesList" :movie="movie"></MovieItem>

        </div>
    </main>

</template>


<style lang="scss">


@use "../scss/mixin" as *;
@use "../scss/variables" as *;

    main{
        background-color: $secondColor;

        height: 100vh;

        margin-top: 80px;

        padding: 0 3rem;

        h2{
                color: rgba(255, 255, 255, 0.557);
                padding: 10px;  
            }

        #movie_container{

            @include dRow();

            padding: 20px;
            gap: 20px;

            overflow-x: auto;
            overflow-y: hidden;

        }
       
    }


</style>