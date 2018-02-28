<template>
    <div class='details'>
      <h4>Details from Search {{title}}: </h4>
      {{movie.title}}
      <div v-if="movie.poster_path">
          <img :src="'https://image.tmdb.org/t/p/w500/'+ movie.poster_path">
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'details',
      props: ['movie', 'title']
    }
  
  </script>
  
  <style scoped>
    .details{
      background-color: teal;
      color: white;
    }
  
  </style>