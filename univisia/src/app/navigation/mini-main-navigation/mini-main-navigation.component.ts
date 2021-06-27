import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
          animate('400ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('400ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(90deg)' })),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('200ms ease-in'))
    ])
  ]
})

export class MiniMainNavigationComponent implements OnInit {
  public menuOpen = false
  public currentPage = '';
  public state: string = 'default';

  constructor(private mainService: MainServiceService, private router: Router) { }

  ngOnInit(): void {
    this.mainService.currentPage.subscribe(page => this.currentPage = page)
  }

  goToService(target: any) {
    this.mainService.serviceBlock.next(target.id);
    this.router.navigate(['/services'])
  }

  cangeMenuState() {
    this.menuOpen = !this.menuOpen;
    this.state = this.menuOpen ? 'rotated' : 'default';

    // page size control 
    setTimeout(() => this.mainService.miniMenuState.next(
        this.menuOpen ? 
          document.getElementById('open-menu')?.offsetHeight :
          'fit-content'
      )
    )
  }

}
