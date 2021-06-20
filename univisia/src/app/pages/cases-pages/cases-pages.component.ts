import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-cases-pages',
  templateUrl: './cases-pages.component.html',
  styleUrls: ['./cases-pages.component.scss']
})
export class CasesPagesComponent implements OnInit, OnDestroy {
  private resizeSubscription: Subscription = new Subscription;
  public windowWidth = window.innerWidth;
  public breakpoint = this.mainServiceService.breakpoint;
  public cases: any;
  
  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit() {
    this.resizeSubscription = this.mainServiceService.onResize$
      .subscribe(size => this.windowWidth = size.innerWidth);
    this.mainServiceService.getCases().subscribe(res => this.cases = res)
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
