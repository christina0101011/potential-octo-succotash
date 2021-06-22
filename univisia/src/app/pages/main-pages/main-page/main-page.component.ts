import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

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
export class MainPageComponent implements OnInit, OnDestroy {
  public currentService = 'startups'
  public serviceIndex = 0
  private interval: any
  private services = [
    'startups', 'websites', 'azure', 'stuffing'
  ]

  @Input() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.play()
    }, 2000)
  }
  
  play() {
    if (this.serviceIndex < this.services.length - 1) {
      this.serviceIndex++
    } else {
      this.serviceIndex = 0
    }
    this.currentService = this.services[this.serviceIndex]
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
