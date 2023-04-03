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
        media: Object,
    },

    computed:{

        showFlag(){

            switch(this.media.original_language){

                case "en":
                    return "gb";

                case "ja":
                    return "jp";

                case "zh":
                    return "cn";

                case "ko":
                    return "cn";

                case "ko":
                    return "kr";

                default:

                    return this.media.original_language

                
            }

        }

    },


 


 


 
}

</script>


<template>

    

    <div class="movie_card">
        <img v-if="media.poster_path !== null" class="movie_cover" :src="store.imgSrc + media.poster_path" alt="image">

        <div class="movie_cover_null" v-else>Copertina non disponibile</div>

        <!-- pongo le condizioni affinchè si veda il nome o il titolo dato che le serie si identificano con nome -->
        <h4 v-if="media.title" class="movie_title">{{ media.title }}</h4>
        <h4 v-else-if="media.name" class="media_name">{{ media.name }}</h4>

        <div class="movie_info">

            <!-- nome o titolo originale -->
            <div v-if="media.original_title" class="movie_original_title"><b>Titolo Originale:</b>{{ media.original_title }}</div>
             
            <div v-else-if="media.original_name" class="movie_original_title"><b>Titolo Originale:</b>{{ media.original_name}}</div>


            <!-- voto approssimato -->
            <div class="movie_vote"><b>Voto:</b>{{ media.vote_average }}</div>



            <!-- bandiere -->
            <div class="movie_language">
                <b>Lingua Originale:</b>
                <span class="flag" :class="'fi fi-' + showFlag"></span>
            </div>

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

        .movie_cover{
            width: 400px;
            height: 300px;

            object-fit: cover;
            object-position: center;



        }

        .movie_cover_null{
            width: 400px;
            height: 300px;

            background-color: white;
            text-align: center;
            padding: 6rem 2rem;
        }

        .movie_info{
            position: absolute;
            top: 0;

            padding: 10px;

            font-size: 12px;

            display: none;

            .movie_language{

                padding: 20px 0;
                display: flex;
                gap: 5px;
                align-items: center;
                
            }

            

        }

        
        

    }

    .movie_card:hover {
        .movie_info{
            display: block;

             color: white;
        }

        .movie_cover{
            filter: brightness(0.3);
            transform: scale(1.04);
            object-fit: contain;
        }

        .movie_cover_null{
            filter: brightness(0.3);
            transform: scale(1.04);
        }
        
     }
    

</style>