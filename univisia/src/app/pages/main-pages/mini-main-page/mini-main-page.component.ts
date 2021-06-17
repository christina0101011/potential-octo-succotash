import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-mini-main-page',
  templateUrl: './mini-main-page.component.html',
  styleUrls: ['./mini-main-page.component.scss']
})
export class MiniMainPageComponent implements OnInit {

  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit(): void {
    this.mainServiceService.currentPage.next('services')
  }

}
