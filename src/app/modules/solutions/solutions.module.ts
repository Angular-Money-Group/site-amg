import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsPageComponent } from './components/solutions-page/solutions-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SolutionsPageNeedDevsComponent } from './components/solutions-page-need-devs/solutions-page-need-devs.component';
import { SolutionsPageWhyChooseComponent } from './components/solutions-page-why-choose/solutions-page-why-choose.component';
import { SolutionsPageYourProjectsComponent } from './components/solutions-page-your-projects/solutions-page-your-projects.component';
import { SolutionsPageWhyContractComponent } from './components/solutions-page-why-contract/solutions-page-why-contract.component';

const routes:Routes = [{path:'', component:SolutionsPageComponent}]

@NgModule({
  declarations: [
    SolutionsPageComponent,
    SolutionsPageNeedDevsComponent,
    SolutionsPageWhyChooseComponent,
    SolutionsPageYourProjectsComponent,
    SolutionsPageWhyContractComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SolutionsModule { }
