import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hiring-page-curriculum',
  templateUrl: './hiring-page-curriculum.component.html',
  styleUrls: ['./hiring-page-curriculum.component.scss']
})
export class HiringPageCurriculumComponent implements OnInit {
  @Output() idCurriculumHTML = new EventEmitter
  @Input() goToCurriculum!: Observable<any>


  constructor() { }

  ngOnInit(): void {
    this.goToCurriculum.subscribe(() => {
      document.getElementById('curriculumForm')?.scrollIntoView({ behavior: 'smooth' });
    })
  }
}
