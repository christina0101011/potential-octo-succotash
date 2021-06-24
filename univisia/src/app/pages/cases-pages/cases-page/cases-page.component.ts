import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(
        ':enter', [style({height: '10px', opacity: 0}), animate('.2s linear')]),
      transition(
        ':leave', [style({opacity: 0}), animate('.2s linear', style({height: '10px' }))
      ])
    ]),
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out'))
    ])
  ]
})
export class CasesPageComponent implements OnInit {
  @Input() cases: any;
  
  public showContent = 0;

  constructor() { }

  ngOnInit(): void {  }

}
