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

        // test per film e 
        popularMovie:'/movie/popular',
        // serie popolari
        popularSeries: '/tv/popular'
    },

    // array movies
    moviesList: [],

    // array serieTV
    tvSeriesList: [],

    // URL immagine con dimensione
    imgSrc: 'http://image.tmdb.org/t/p/w342/',

    // testo input
    inputText:"",
    
    index: 0,

});