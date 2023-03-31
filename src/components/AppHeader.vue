<script>
// importo lo store e axios
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
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
            <input type="search" @keyup.enter="$emit('search')" placeholder="search in the catalog" v-model="store.inputText">
            <button @click="$emit('search')">SEARCH</button>
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
    width: 100vw;
    z-index: 1;

    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    #header_left{

        h1{
            @include titleStyle();

            font-size: 35px;
        }

    }

    #header_right{

        input{
            @include border();
            background-color: $secondColor;
            color: white;
        }

        button{

            margin-left: 1rem;

            @include border();

            background-color: $mainColor;
            color: white;

            font-weight: bold;
            letter-spacing: 3px;

            cursor: pointer;

            &:hover{

                background-color: red;
            
            }
        }

    }

  





}




</style>