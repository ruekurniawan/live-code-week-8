<template>
  <div class="container my-4">
    <div v-if="!isLogin">
      <Login/>
    </div>
    <div v-else>
      <AddApodForm />
      <div class="row">
        <div class="col-6">
          <SearchBar @searchData="searchData"/>
          <ApodList :search="search"/>
        </div>
        <ApodDetail />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/views/Login.vue'
import AddApodForm from '@/components/AddApodForm.vue'
import SearchBar from '@/components/SearchBar.vue'
import ApodList from '@/components/ApodList.vue'
import ApodDetail from '@/components/ApodDetail.vue'
import { mapState } from "vuex";
export default {
  name: 'home',
  components: {
    Login,
    AddApodForm,
    SearchBar,
    ApodList,
    ApodDetail
  },
  data() {
    return {
      search: ''
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.$store.commit('SET_LOGIN', true);
    }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    searchData(payload) {
      this.search = payload
    }
  },  
}
</script>
