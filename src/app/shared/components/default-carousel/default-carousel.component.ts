import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-carousel',
  templateUrl: './default-carousel.component.html',
  styleUrls: ['./default-carousel.component.scss']
})
export class DefaultCarouselComponent implements OnInit {

 imageUrls= [
      { image: "assets/svg/rooms/sala-2.svg"},
     { image:  "assets/svg/rooms/sala-6.svg"},
      { image: "assets/svg/rooms/sala-7.svg"} ]


  constructor() { }

  ngOnInit(): void {


}
}
