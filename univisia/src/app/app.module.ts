import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import { MiniMainNavigationComponent } from './navigation/mini-main-navigation/mini-main-navigation.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CasesPageComponent } from './pages/cases-pages/cases-page/cases-page.component';
import { MiniCasesPageComponent } from './pages/cases-pages/mini-cases-page/mini-cases-page.component';
import { MiniMainPageComponent } from './pages/main-pages/mini-main-page/mini-main-page.component';
import { MainPageComponent } from './pages/main-pages/main-page/main-page.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { CasesPagesComponent } from './pages/cases-pages/cases-pages.component';
import { NavigationsComponent } from './navigation/navigations.component';
import { HeaderImageComponent } from './header/header-image/header-image.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    MiniMainNavigationComponent,
    ContactPageComponent,
    AboutPageComponent,
    CasesPageComponent,
    MiniCasesPageComponent,
    MiniMainPageComponent,
    MainPageComponent,
    MainPagesComponent,
    CasesPagesComponent,
    NavigationsComponent,
    HeaderImageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
