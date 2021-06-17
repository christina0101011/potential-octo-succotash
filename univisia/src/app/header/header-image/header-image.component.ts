import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainServiceService } from '../../main-service.service';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss']
})

export class HeaderImageComponent implements OnInit, OnDestroy {
  private resizeSubscription: Subscription = new Subscription;
  public windowWidth = window.innerWidth;
  public breakpoint = this.mainServiceService.breakpoint;
  public currentPage = 'services';
  
  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit() {
    this.resizeSubscription = this.mainServiceService.onResize$
      .subscribe(size => this.windowWidth = size.innerWidth);

    this.mainServiceService.currentPage.subscribe(page => this.currentPage = page)
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

}
