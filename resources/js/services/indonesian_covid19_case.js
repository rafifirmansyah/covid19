import {http, httpGlobal} from './http_service';

export function getCasePositivePerday() {
    return http().get('harian');
}

export function getTotalCase() {
    return http().get();
}

export function getTotalCaseProvinsi(){
    return http().get('provinsi');
}

export function getAllCaseIndonesian(){
    return http().get('kasus');
}