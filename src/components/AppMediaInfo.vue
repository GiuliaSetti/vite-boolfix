<script>
import { store } from '../store';

export default {
    name: 'AppMediaInfo',
    data() {
        return {
            store,

        }
    },
}
</script>






<template>

    <div class="item_container">

        <i @click="$emit('close')" class="fa-solid fa-square-xmark"></i>


        <div class="item_image">
            <img v-if="store.moviesList[store.index].backdrop_path !== null" :src="store.imgSrc + store.imgBack + store.moviesList[store.index].backdrop_path" alt="cover">
            <div class="item_null" v-else>Copertina Non Disponibile</div>
            <i class="fa-regular fa-circle-play"></i>
        </div>

    

        <div class="item_info">
            <div class="item_title">
                <h3 class="item_element_name">Title:</h3>
                <h4 class="item_element_name">Titolo Originale:</h4>
            </div>

            <div class="item_overview">
                <div class="item_element_name"><b>Trama:</b></div>
                <div class="plot">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum inventore ratione laboriosam, esse atque iste rem facilis rerum voluptatum molestiae laborum unde sequi repellendus! Vel pariatur ab officiis libero. Aliquid.</div>
            </div>

            <div class="item_genre">
                <span class="item_element_name"> <b> Genere:</b></span>
                <span>Ciao</span>

            </div>

            <div class="item_cast">

                <span class="item_element_name"><b>Cast:</b></span>
                <div>
                    attore 1
                    attore 2
                    attore 3
                </div>
            </div>
          
        </div>

        






    </div>


</template>




<style lang="scss" scoped>

    .item_container{
        position: relative;
        max-width: 350px;

        background-color: black;

        color: rgb(71, 71, 71);
        box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.249);

        .fa-square-xmark{

            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1;

            font-size: 20px;

            color: white;
            cursor: pointer;

            &:hover{
                transform: scale(1.3);
            }
        }

        .item_image{
            position: relative;

            .item_null{
                width: 100%;
                height: 200px;
                background-color: white;
                padding: 5rem 1rem;
            }
            

            i{
                position: absolute;

                top: 40%;
                left: 40%;

                font-size: 50px;

                display: none;
                cursor: pointer;

            }

            img{
                display: block;

                width: 100%;
                height: 100%;

            }

            &:hover{

                i{
                    display: block;
                }

                img{
                    filter: brightness(0.5);
                }
            }
        }

        .item_element_name{
            color: rgb(158, 154, 154);
        }
        
        .item_info{
            padding: 15px 10px;

            .plot{
                font-size: 12px;
            }
        }
    }



</style>