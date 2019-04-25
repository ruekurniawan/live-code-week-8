<template>
  <!-- AddApodForm -->
  <div class="jumbotron">
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <div>
          <h2>Add Astronomy Picture</h2>
          <p>
            Please input date</em>, etc.
          </p>
          <form class="input-group" @submit.prevent="dateSubmit">
            <Datepicker v-model="date"></Datepicker>
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import axios from 'axios'
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      date: new Date()
    }
  },
  methods: {
    dateSubmit() {
      axios({
        method: 'PoST',
        url: 'http://localhost:3000/apods',
        data: {
          date: this.date
        },
        headers: { token: localStorage.getItem('token')}
      })
      .then(({data}) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
}
</script>

<style>

</style>
