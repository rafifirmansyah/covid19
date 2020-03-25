import store from './store';
import axios from 'axios';

export function http() {
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            
        }
    })
}

export function httpGlobal() {
    return axios.create({
        baseURL: store.state.apiURLGlobal,
        headers: {
            
        }
    });
}
