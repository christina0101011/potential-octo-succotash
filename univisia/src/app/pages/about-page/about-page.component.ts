import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit(): void {
    this.mainServiceService.currentPage.next('about')
  }

}
