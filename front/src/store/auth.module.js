import AuthService from '../services/auth.service'

const user = localStorage.getItem('user')
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        },
        (error) => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },

    logout({ commit }) {
      AuthService.logout()
      commit('logOut')
    },

    signup({ commit }, user) {
      return AuthService.signup(user).then(
        (response) => {
          commit('signupSuccess')
          return Promise.resolve(response.data)
        },
        (error) => {
          commit('signupFailure')
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logOut(state) {
      state.status.loggedIn = false
    },
    signupSuccess(state) {
      state.status.loggedIn = false
    },
    signupFailure(state) {
      state.status.loggedIn = false
    }
  }
}

export default auth
