<script>

// importo lo store e axios
import { store } from '../store';

export default {
    name: 'MediaItem',
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


    methods:{

        getVote(vote){

            vote = Math.round(vote / 2);
            return vote
        }


    }


 


 
}

</script>


<template>

    

    <div class="media_card">
        <img v-if="media.poster_path !== null" class="media_cover" :src="store.imgSrc + media.poster_path" alt="image">

        <div class="media_cover_null" v-else>Copertina non disponibile</div>

        <!-- pongo le condizioni affinchè si veda il nome o il titolo dato che le serie si identificano con nome -->
        <h4 v-if="media.title" class="media_title">{{ media.title }}</h4>
        <h4 v-else-if="media.name" class="media_name">{{ media.name }}</h4>

        <div class="media_info">

            <!-- nome o titolo originale -->
            <div v-if="media.original_title" class="media_original_title"><b>Titolo Originale:</b>{{ media.original_title }}</div>
             
            <div v-else-if="media.original_name" class="media_original_title"><b>Titolo Originale:</b>{{ media.original_name}}</div>


            <!-- voto approssimato -->
            <div class="media_vote">
                <div><b>Voto: {{ getVote(media.vote_average) }}</b></div>
                
                <span v-for="star in 5" :class="star <= getVote(media.vote_average) ? 'fa-solid' : 'fa-regular'" class="fa-star"></span>
            </div>
            


            <!-- bandiere -->
            <div class="media_language">
                <b>Lingua Originale:</b>
                <span class="flag" :class="'fi fi-' + showFlag"></span>
            </div>

        </div>

      

    </div>


</template>

<style lang="scss" scoped>

@use "../scss/mixin" as *;
@use "../scss/variables" as *;

    .media_card{

        position: relative;

        

        h4{
            color: white;
            padding: 10px 0;

        }

        .media_cover{
            width: 400px;
            height: 300px;

            object-fit: cover;
            object-position: center;



        }

        .media_cover_null{
            width: 400px;
            height: 300px;

            background-color: white;
            text-align: center;
            padding: 6rem 2rem;
        }

        .media_info{
            position: absolute;
            top: 0;

            padding: 10px;

            font-size: 12px;

            display: none;
            .media_language{

                padding: 20px 0;
                display: flex;
                gap: 5px;
                align-items: center;
                
            }



            

        }

        
        

    }

    .media_card:hover {
        .media_info{
            display: block;

             color: white;
        }

        .media_cover{
            filter: brightness(0.3);
            transform: scale(1.04);
            object-fit: contain;
        }

        .media_cover_null{
            filter: brightness(0.3);
            transform: scale(1.04);
        }
        
     }
    

</style>