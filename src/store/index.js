import Vue from "vue";
import Vuex from 'vuex';
// import {variables} from "./modules/variables";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // variables,
  }
});
export default store;
