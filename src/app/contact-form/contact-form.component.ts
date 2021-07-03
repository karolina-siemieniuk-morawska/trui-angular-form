import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      nip: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: [''],
      topic: ['cooperation', [Validators.required]],
      driversLicence: ['', [Validators.required]],
      message: [''],
      agreements: ['']
    });  
  }
  
  onSubmit(){
    console.log(this.contactForm);
  }

}
