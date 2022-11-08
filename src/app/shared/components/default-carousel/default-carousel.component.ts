import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-carousel',
  templateUrl: './default-carousel.component.html',
  styleUrls: ['./default-carousel.component.scss']
})
export class DefaultCarouselComponent implements OnInit {
  imageUrls= [
    { image: "assets/svg/rooms/entrada.webp",title:"Venha conhecer nossa sede!", desc:"Um espaço que foi preparado para realizar projetos, treinamentos e desenvolver soluções."},
    { image: "assets/svg/rooms/deck.webp" ,title:"", desc:""},
    { image: "assets/svg/rooms/sala-2.webp",title:"", desc:""},
    { image: "assets/svg/rooms/sala-6.webp",title:"", desc:""},
    { image: "assets/svg/rooms/sala-7.webp",title:"", desc:""},
    { image: "assets/svg/rooms/sala-de-reunioes.webp",title:"", desc:""},
    { image: "assets/svg/rooms/sala-de-reunioes-2.webp",title:"", desc:""},
    { image: "assets/svg/rooms/sala-8.webp",title:"", desc:""},
    { image: "assets/svg/rooms/sala-9.webp",title:"", desc:""},
    { image: "assets/svg/rooms/area-externa.webp",title:"", desc:""},
    { image: "assets/svg/rooms/area-externa-2.webp",title:"", desc:""},
     ]
 carouselConfig : any;
  constructor() { }

  ngOnInit(): void {

  }

}
