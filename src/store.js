import {reactive} from 'vue';

export const store = reactive({

    // API come oggetto
    APIs:{
        // key
        APIkey: '?api_d977e2c9f9c0611be90c3b3b88119e14',
        // movie
        movieAPI: 'https://api.themoviedb.org/3/search/movie',
    },

    // array movies
    moviesList: [],


    // testo input
    inputText:"",

});