<template>
  <div>
    <h1>Now Showing</h1>
    <br />
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="item in movies" :key="item.id" class="col">
        <div class="card h-100" style="width: 18rem">
          <img
            :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.overview }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: auto;
}
</style>
<script setup>

import { ref } from 'vue'
import axios from 'axios'

let movies = ref(null)
async function fetchData() {
  try {

    const headers = {
      'Content-Type': 'application/json', // Example: JSON content type
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` // Example: Authorization token
    }
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      { headers }
    )
    movies.value = response.data.results
  } catch (error) {
    console.error('Error fetching data:', error)
    
  }
}
fetchData()
</script>
