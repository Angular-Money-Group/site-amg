import { IContactForm } from './../../../../shared/models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  constructor(
    private http: HttpClient
  ) { }

    sendCurriculum(values:IContactForm): Observable<any>{
      const url = environment.contact;
      console.log('response:',values);
      return this.http.post(url,values,{
        responseType: 'arraybuffer'
      })
    }
}
