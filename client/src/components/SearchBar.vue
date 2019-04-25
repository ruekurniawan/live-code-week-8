<template>
  <form method="post" class="input-group mb-3" @submit.prevent="searchData">
    <input
      type="text"
      name="search"
      id="search"
      class="form-control"
      autocomplete="off"
      placeholder="Search..."
      v-model="title"
    >
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {  
  data() {
    return {
      title: ''
    }
  },
  methods: {
    searchData() {
      this.$emit('searchData', this.title)
    }
  },
}
</script>

<style>
</style>
