import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-mini-main-navigation',
  templateUrl: './mini-main-navigation.component.html',
  styleUrls: ['./mini-main-navigation.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
  ]
})
export class MiniMainNavigationComponent implements OnInit {
  public menuOpen = false
  public currentPage = '';

  constructor(private mainService: MainServiceService, private router: Router) { }

  ngOnInit(): void {
    this.mainService.currentPage.subscribe(page => this.currentPage = page)
  }

  goToService(target: any) {
    this.mainService.serviceBlock.next(target.id);
    this.router.navigate(['/services'])
  }

}
