import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CasesPagesComponent } from './pages/cases-pages/cases-pages.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

const routes: Routes = [
  {
    path: 'services',
    component: MainPagesComponent
  },
  {
    path: 'cases',
    component: CasesPagesComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    redirectTo: 'services'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
