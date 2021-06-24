import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-mini-main-page',
  templateUrl: './mini-main-page.component.html',
  styleUrls: ['./mini-main-page.component.scss']
})
export class MiniMainPageComponent implements OnInit, OnDestroy {
  private redirectSubscription: Subscription = new Subscription;

  constructor(private mainService: MainServiceService) { }

  ngOnInit(): void {
    this.mainService.currentPage.next('main');

    this.redirectSubscription = this.mainService.serviceBlock.subscribe((id: any) => {
      let el: any = document.getElementById(`${id}-s`);
      if (el.offsetTop) {
        window.scrollTo(0, el.offsetTop + 100);
      }
    })
  }

  ngOnDestroy() {
    if (this.redirectSubscription) {
      this.redirectSubscription.unsubscribe()
    }
  }
}
