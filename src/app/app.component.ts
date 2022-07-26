import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'amg';

  ngOnInit(){
    // AOS.init({
    //   once: true,
    //   duration: 1200,
    // });
    // window.addEventListener('load',AOS.refresh)
  }
}
