import vuex from "vuex";
import axios from "axios";
import vue from "vue";

let movieDB = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=",
  timeout: 2000
});

vue.use(vuex);

export default new vuex.Store({
  state: {
    user: {
      name: "Mark"
    },
    searchResults: [],
    activeMovie: {}
  },
  mutations: {
    addResults(state, payload) {
      state.searchResults = payload;
    },
    setActiveMovie(state, payload){
      state.activeMovie = payload
    }
  },
  actions: {
    getMovies({ commit, dispatch }, title) {
      movieDB(title)
        .then(res => {
          commit("addResults", res.data.results);
        })
        .catch(err => {
          console.error(err);
        });
    },
    setActiveMovie({commit,dispatch}, payload) {
      commit("setActiveMovie", payload)
    }
  }
});
