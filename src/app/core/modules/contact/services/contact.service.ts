import { environment } from './../../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

    sendContact(values:any): Observable<any> {
      const url =  environment.contact
      return this.http.post(url, values)
    }
}
