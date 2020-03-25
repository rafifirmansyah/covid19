import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiURL: 'https://indonesia-covid-19.mathdro.id/api/',
        apiURLGlobal: 'https://covid19.mathdro.id/api/'
    },
    mutations: {},
	actions:{}
});