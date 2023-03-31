<script>

// importo lo store e axios
import { store } from '../store';

export default {
    name: 'MovieItem',
    data() {
        return {
            store
        }
    },

    props: {
        movie: Object,
    },


 
}

</script>


<template>

    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">{{ movie.title }}</h4>

        <div class="movie_info">
            <div class="movie_original_title"><b>Titolo Originale:</b>{{ movie.original_title }}</div>
            <div class="movie_vote"><b>Voto:</b>{{ movie.vote_average }}</div>
            <div class="movie_language"><b>Lingua Originale:</b>{{ movie.original_language }}</div>
        </div>

      

    </div>


</template>

<style lang="scss" scoped>

@use "../scss/mixin" as *;
@use "../scss/variables" as *;

    .movie_card{

        position: relative;

        h4{
            color: white;
            padding: 10px 0;

        }

        .movie_info{
            position: absolute;
            top: 0;

            padding: 10px;

            font-size: 12px;

            // display: none;

            

        }

        
        

    }

    .movie_card:hover {
        .movie_info{
            display: block;

             color: white;
        }

        img{
            filter: brightness(0.3);
            transform: scale(1.04);
        }
     }
    

</style>