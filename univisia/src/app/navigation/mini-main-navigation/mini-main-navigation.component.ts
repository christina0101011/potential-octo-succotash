import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-mini-main-navigation',
  templateUrl: './mini-main-navigation.component.html',
  styleUrls: ['./mini-main-navigation.component.scss']
})
export class MiniMainNavigationComponent implements OnInit {
  public menuOpen = false
  public currentPage = '';

  constructor(private mainServes: MainServiceService) { }

  ngOnInit(): void {
    this.mainServes.currentPage.subscribe(page => this.currentPage = page)
  }

}
