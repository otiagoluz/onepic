import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})

export class SignUpComponent implements OnInit, AfterViewInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder, 
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required, 
        Validators.email]],
      userName: ['', [
        Validators.required,
        lowerCaseValidator,
        Validators.minLength(2),
        Validators.maxLength(30)],
        this.userNotTakenValidatorService.checkUserNameTaken()],
    
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)]]
    }); 
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
        this.emailInput.nativeElement.focus();
  }
  

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        error => console.log(error)
      );
  }
}