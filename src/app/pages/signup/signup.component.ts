import { Component } from '@angular/core';
import translations from './translations.json';
import { Translations } from 'src/app/types/translations.type';
import { ValidationService } from '../../services/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  language = 'pt';
  translations: Translations;
  verifyError: string | null = null;
  password = "";
  confirmPassword = "";
  constructor(private validationService: ValidationService, private router: Router) {
    this.translations = translations;
  }

  verifyMail(mail: string) {
    const isEmailValid = this.validationService.verifyEmail(mail);
    if(!isEmailValid) {
      this.verifyError = this.translations[this.language]['MAIL_ERROR'];
      return isEmailValid;
    }
    this.verifyError = null;
    return isEmailValid;
  }

  verifyName(name: string): string | null {
    if(!this.validationService.verifyName(name))
      return this.verifyError = this.translations[this.language]['NAME_ERROR'];
    return this.verifyError = null;
  }

  verifyBirth(birth: string): boolean {
    const currentDate = new Date();
    const birthDate = new Date(birth);
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    if (yearsDiff > 16 || (yearsDiff === 16 && monthsDiff >= 0)) {
      this.verifyError = null;
      return true;
    } else {
      this.verifyError = this.translations[this.language]['AGE_ERROR'];
      return false;
    }
  }

  verifyPass(pass: string, isFirst?: boolean) {
    if(isFirst) this.password = pass;
    this.confirmPassword = pass
    const isPasswordValid = this.validationService.verifyPassword(pass);
    if(!isPasswordValid) {
      this.verifyError = this.translations[this.language]['PASS_ERROR'];
      return isPasswordValid;
    }
    if(!(this.password === this.confirmPassword)) {
      this.verifyError = this.translations[this.language]['NOT_EQUAL_PASS_ERROR'];
      return
    }
    return isPasswordValid;
  }

  signUp() {
    if(this.verifyError) return;
  }
  login() {
    this.router.navigate(['/login']);
  }
}
