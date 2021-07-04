import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { validatePolish } from 'validate-polish';

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
      nip: ['', [Validators.required, this.validateNip()]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('[- +()0-9]{9,}')]],
      topic: ['cooperation', [Validators.required]],
      driversLicense: [''],
      message: [''],
      agreements: this.formBuilder.group({
        processing: [false, [Validators.requiredTrue]],
        marketing: [false]
      })
    });  
  }

  private validateNip(): ValidatorFn {
      return (control: AbstractControl) => validatePolish.nip(control.value) ? null : { incorrectNip: control.value };
  }
  
  public checkAll(event: any): void {
    this.contactForm.controls.agreements.setValue({ processing: event.target.checked, marketing: event.target.checked });
  }
  
  public allAgreementsSelcted(): boolean {
    return Object.values(this.contactForm.controls.agreements.value).every(value => value === true);
  }
  
  public onSubmit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
