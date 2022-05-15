import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // ? * З'єднання фронта з беком *
  apiUrl = 'http://localhost:3000/Books';

  getAllBooks():Observable<any>
    {
        return this._http.get(`${this.apiUrl}`);
    }
}
