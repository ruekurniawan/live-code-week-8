import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    submitLogin({commit}, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        // console.log(data)
        localStorage.setItem('token', data.access_token)
        commit('SET_LOGIN', true)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})
