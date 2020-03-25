import {http, httpGlobal} from './http_service';

export function getGlobal() {
    return httpGlobal().get();
}

export function getAllCountryDetails() {
    return httpGlobal().get('confirmed');
}