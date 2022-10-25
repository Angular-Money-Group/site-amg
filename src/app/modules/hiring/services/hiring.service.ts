
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContactForm } from 'src/app/shared/models/contact';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  constructor(
    private http: HttpClient
  ) { }

    sendCurriculum(values:any): Observable<any>{
      const url = environment.contact;
      console.log('response:',values);
      return this.http.post(url,values)
    }
}
