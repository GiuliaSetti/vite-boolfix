<script>
// importo lo store e axios
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            src: '../public/img/profile.png',
        }
    }
}

</script>


<template>


    <header>


        <div id="header_left">
            <h1>BOOLFIX</h1>
        </div>

        <div id="header_right">
            <div class="header_input">
                
                <input type="search" @keyup.enter="$emit('search')" placeholder="Cerca nel catalogo.." v-model="store.inputText">
            </div>

            <div class="header_button">
                <button @click="$emit('search')">CERCA</button>
            </div>



            <div class="profile_image">
                <img :src="src" alt="image">
            </div>
        </div>

    </header>


</template>


<style lang="scss">


@use "../scss/mixin" as *;
@use "../scss/variables" as *;

header{
    @include gradient();
    @include dRow;

    height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;

    justify-content: space-between;
    align-items: center;

    padding: 2rem;

    #header_left{

        h1{
            @include titleStyle();

            font-size: 35px;
        }

    }

    #header_right{
        
        @include dRow();
        justify-content:  flex-end;
        align-items: center;
        gap: 10px;

        input{
            @include border();
            background-color: $secondColor;
            color: white;
        }

        button{
            background-color: $mainColor;

            @include border();
            @include button();
            
        }

        .profile_image{
            width: 10%;
            cursor: pointer;
            margin-left: 20px;

            
                img{

                    width: 100%;
                    display: block;

                }

                &:hover{
                    border: 3px solid white;

                }

        }

    }

  





}




</style>