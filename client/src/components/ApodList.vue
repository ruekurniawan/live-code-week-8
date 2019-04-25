<template>
  <div class="card mt-2">
    <div v-for="(apod, index) in apods" :key="index">
      <!-- ApodItem -->
      <h5 class="card-title">{{apod.title}}</h5>

      <div v-if="apod.mediaType === 'video'">
        <!-- FOR VIDEO -->
        <iframe width="498" height="332" v-bind:src="apod.url"></iframe>
      </div>
      <div v-else>
        <!-- FOR IMAGE -->
        <img class="card-img-top" v-bind:src="apod.url" alt="Card image cap">
      </div>

      <div class="mt-3">
        <a href="#" class="btn btn-primary mr-2">See detail</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      apods: []
    }
  },
  created() {
    this.getAllApod()
  },
  methods: {
    getAllApod() {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/apods',
        headers: { token: localStorage.getItem('token')}
      })
      .then(({data}) => {
        console.log(data, '-----')
        this.apods = data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },props: ['searchData'],
  // computed: {
  //   let regex = ew RegExp(".*" + this.search + ".*", "i");
  //     return this.results.filter((result) => {
  //       return result.title.match(regex)
  //     })
  // },
};
</script>

<style>
</style>
