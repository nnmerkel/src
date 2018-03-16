import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fruit } from './fruit';
import { FRUITS } from './fruits';

@Injectable()
export class FruitService {
    //mock data method, works
    getFruits(): Observable<Fruit[]> {
        return of(FRUITS);
    }
    
    //getFruits (): Observable<Fruit[]> {
    //    return this.http.get<Fruit[]>(this.fruitsUrl);
    //}

    constructor(private http: HttpClient) { }
    
    private fruitsUrl = 'api/fruits';

}
