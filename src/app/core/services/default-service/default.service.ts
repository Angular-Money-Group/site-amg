import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

constructor() { }

  backToTop(){
    window.scrollTo(0,0);
  }

}
