import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  public gfg = true;
  public isMenuCollapsed = true;


  constructor(private router: Router) { }

  ngOnInit(): void {


  }




  isHome() {
    return this.router.url === '/home';
  }

  isAbout() {
    return this.router.url === '/about-us';
  }
  isContact() {
    return this.router.url === '/contact-us';
  }
  isHiring() {
    return this.router.url === '/hiring';
  }
  isSolutions() {
    return this.router.url === '/solutions';
  }



}
