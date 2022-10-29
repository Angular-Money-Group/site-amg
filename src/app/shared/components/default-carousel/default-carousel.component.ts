import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-carousel',
  templateUrl: './default-carousel.component.html',
  styleUrls: ['./default-carousel.component.scss']
})
export class DefaultCarouselComponent implements OnInit {

 carouselConfig : any;
  constructor() { }

  ngOnInit(): void {
    this.carouselConfig = {
      title: "",
      subtitle: "",
      imageUrls: ["assets/svg/rooms/sala-2.svg", "assets/svg/rooms/sala-2.svg", "assets/svg/rooms/sala-2.svg" ]
    };
  }

}
