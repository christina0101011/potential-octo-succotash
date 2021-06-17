import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit, OnDestroy {
  private resizeSubscription: Subscription = new Subscription;
  public windowWidth = window.innerWidth;
  public breakpoint = this.mainServiceService.breakpoint;

  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit() {
    this.resizeSubscription = this.mainServiceService.onResize$
      .subscribe(size => this.windowWidth = size.innerWidth);
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}
