import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out'))
    ])
  ]
})
export class MainPageComponent implements OnInit {
  public currentService = 'startups'
  @Input() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
