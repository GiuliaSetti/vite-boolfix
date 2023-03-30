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

 
}

</script>


<template>

    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">Titolo</h4>

        <div class="movie_info">
            <h5 class="movie_original_title">Titolo Originale:</h5>
            <div class="movie_vote">Voto:</div>
            <div class="movie_overview">Overview:</div>
        </div>

      

    </div>

    
    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">Titolo</h4>

        <div class="movie_info">
            <h5 class="movie_original_title">Titolo Originale:</h5>
            <div class="movie_vote">Voto:</div>
            <div class="movie_overview">Overview:</div>
        </div>

      

    </div>

    
    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">Titolo</h4>

        <div class="movie_info">
            <h5 class="movie_original_title">Titolo Originale:</h5>
            <div class="movie_vote">Voto:</div>
            <div class="movie_overview">Overview:</div>
        </div>

      

    </div>

    
    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">Titolo</h4>

        <div class="movie_info">
            <h5 class="movie_original_title">Titolo Originale:</h5>
            <div class="movie_vote">Voto:</div>
            <div class="movie_overview">Overview:</div>
        </div>

      

    </div>

    
    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">Titolo</h4>

        <div class="movie_info">
            <h5 class="movie_original_title">Titolo Originale:</h5>
            <div class="movie_vote">Voto:</div>
            <div class="movie_overview">Overview:</div>
        </div>

      

    </div>

    
    <div class="movie_card">
        <img src="https://picsum.photos/300/200" alt="image">

        
        <h4 class="movie_title">Titolo</h4>

        <div class="movie_info">
            <h5 class="movie_original_title">Titolo Originale:</h5>
            <div class="movie_vote">Voto:</div>
            <div class="movie_overview">Overview:</div>
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

            display: none;

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