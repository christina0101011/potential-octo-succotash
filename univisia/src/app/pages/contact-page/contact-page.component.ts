import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MainServiceService } from 'src/app/main-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  private resizeSubscription: Subscription = new Subscription;
  public windowWidth = window.innerWidth;
  public breakpoint = this.mainServiceService.breakpoint;
  public contactForm!: FormGroup;

  constructor(
    private mainServiceService: MainServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mainServiceService.currentPage.next('contacts');
    this.resizeSubscription = this.mainServiceService.onResize$
    .subscribe(size => this.windowWidth = size.innerWidth);

    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      phoneNumber: '',
      notes: '',
    });
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
