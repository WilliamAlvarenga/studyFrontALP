import { PlatformDetectorService } from './../../core/plataform-detector/platform-detector.service';
import { Router } from '@angular/router';
import { SignUpService } from './signgup.service';
import { NewUser } from './new-user';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private singupService: SignUpService,
    private router: Router,
    private plataformDetectorService: PlatformDetectorService
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
// tslint:disable-next-line: no-unused-expression
    this.plataformDetectorService.isPlatformBrowser() &&
    this.emailInput.nativeElement.focus();
  }

  signup() {
   const newUser =  this.signupForm.getRawValue() as NewUser;
   this.singupService
    .signup(newUser)
    .subscribe(
      () => this.router.navigate(['']),
      err => console.log(err)
    );

  }
}
