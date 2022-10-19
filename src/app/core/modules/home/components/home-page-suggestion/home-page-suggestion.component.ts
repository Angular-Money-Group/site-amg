import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-suggestion',
  templateUrl: './home-page-suggestion.component.html',
  styleUrls: ['./home-page-suggestion.component.scss']
})
export class HomePageSuggestionComponent implements OnInit {

  loadingSubmit:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
