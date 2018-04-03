import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

// const httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type': 'application/json; charset=utf-8',
//         'Authorization': 'Bearer ae300320b02ca54833f93770b28f9cf87f0bc0ec',
//         'test': '123'
//     })
// };

@Injectable()
export class LoginService {
    credentials = {
        // 后端需要，对前端无意义
        'grant_type': 'password',
        'username': '15295565441',
        'password': '123456',
        // 后端需要，对前端无意义
        'client_id': 'wispirit',
        'client_type': 'patient',
        'expire_day': 0
    };
    constructor(private http: HttpClient) {}

    login() {
        //
        // return this.http.get('http://192.168.10.18/www/testget/');
        return this.http.get('http://httpbin.org/get');
    }
}
