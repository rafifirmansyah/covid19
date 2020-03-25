import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import BootstrapVue from 'bootstrap-vue';


Vue.use(BootstrapVue);


const moment = require('moment');
require('moment/locale/id');
 
Vue.use(require('vue-moment'), {
    moment
});

window.moment = moment;
window.axios = require('axios');

new Vue({ 
    el: '#app',
    render: h => h(App)
});
