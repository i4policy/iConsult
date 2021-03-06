import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import locale from "./modules/locale";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    settings: {
      locale: "english"
    }
  },
  mutations: mutations,
  actions: actions,
  getters: {
    loggedIn: (state) => state.user && state.user.auth_token !== null && state.user.auth_token !== undefined,
    socialUser: (state) => state.user && state.user.facebookID && state.user.googleID && state.user.twitterID
  },
  modules: {
    locale: locale
  }
})
