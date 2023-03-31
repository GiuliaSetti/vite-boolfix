import {reactive} from 'vue';

export const store = reactive({

    // API
    APIs:{
        // base
        APIbase:'https://api.themoviedb.org/3',
        // key
        APIkey: '?api_key=d977e2c9f9c0611be90c3b3b88119e14',
        // query
        query:'&query=',
        // movie
        movieAPI: '/search/movie',
        // series
        tvSeriesAPI: '/search/tv',
    },

    // array movies
    moviesList: [],

    // array serieTV
    tvSeriesList: [],


    

    // testo input
    inputText:"",

});