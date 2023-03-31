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


 
}

</script>


<template>

    <div class="movie_card">
        <img class="movie_cover" src="https://picsum.photos/300/200" alt="image">

        <!-- pongo le condizioni affinchè si veda il nome o il titolo dato che le serie si identificano con nome -->
        <h4 v-if="media.title" class="movie_title">{{ media.title }}</h4>
        <h4 v-else-if="media.name" class="media_name">{{ media.name }}</h4>

        <div class="movie_info">
            <div class="movie_original_title"><b>Titolo Originale:</b>{{ media.original_title }}</div>
            <div class="movie_vote"><b>Voto:</b>{{ media.vote_average }}</div>
            <div class="movie_language">
                <b>Lingua Originale:</b>
                {{ media.original_language }}
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

        .movie_info{
            position: absolute;
            top: 0;

            padding: 10px;

            font-size: 12px;

            display: none;

            .movie_language{

                display: flex;
                align-items: center;

                .movie_flag{
                    
                    width: 30px;
                    
                }


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
        }
     }
    

</style>