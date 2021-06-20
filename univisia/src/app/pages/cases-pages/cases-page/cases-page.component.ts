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
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
      trigger('state', [
        state(
          'visible',
          style({
            opacity: '1'
          })
        ),
        state(
          'hidden',
          style({
            opacity: '0'
          })
        ),
        transition('* => visible', [animate('500ms ease-out')]),
        transition('visible => hidden', [animate('500ms ease-out')])
      ])
  ]
})
export class CasesPageComponent implements OnInit {
  @Input() cases: any;
  
  public showContent: any;

  constructor() { }

  ngOnInit(): void {  }

}
