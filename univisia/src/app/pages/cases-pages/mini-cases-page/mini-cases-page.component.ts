import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-mini-cases-page',
  templateUrl: './mini-cases-page.component.html',
  styleUrls: ['./mini-cases-page.component.scss']
})
export class MiniCasesPageComponent implements OnInit {

  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit(): void {
    this.mainServiceService.currentPage.next('cases')
  }

}
