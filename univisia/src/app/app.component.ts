import { Component, OnInit } from '@angular/core';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'univisia';
  pageSizeIfMenuOpen = 'fit-content'

  constructor(private mainService: MainServiceService) {}

  ngOnInit() {
    this.mainService.miniMenuState.subscribe((size: any) => {
      typeof size === 'string' ? 
        this.pageSizeIfMenuOpen = 'fit-content' :
        this.pageSizeIfMenuOpen = ''
    })
  }
}
