import { Component, Input, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-mini-cases-page',
  templateUrl: './mini-cases-page.component.html',
  styleUrls: ['./mini-cases-page.component.scss']
})
export class MiniCasesPageComponent implements OnInit {
  @Input() cases: any;
  public showContent = 0;

  constructor(private mainServiceService: MainServiceService) { }

  ngOnInit(): void {
    this.mainServiceService.currentPage.next('cases')
  }

  incrementIndex(){
    this.showContent++
  }
  
  decrementIndex() {
    this.showContent--
  }

}
