import { Component } from '@angular/core';
import translations from './translations.json';
import { Translations } from 'src/app/types/translations.type';
import { ValidationService } from '../../services/validation.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  language = 'pt';
  translations: Translations;

  verifyError: string | null = null;
  constructor(private validationService: ValidationService, private router: Router) {
    this.translations = translations;
  }

  verifyMail(mail: string): boolean {
    const isEmailValid = this.validationService.verifyEmail(mail);
    if(!isEmailValid) {
      this.verifyError = this.translations[this.language]['MAIL_ERROR'];
      return isEmailValid;
    }
    this.verifyError = null;
    return isEmailValid;
  }

  verifyPass(password: string): boolean {
    const isPasswordValid = this.validationService.verifyPassword(password);
    if(!isPasswordValid) {
      this.verifyError = this.translations[this.language]['PASS_ERROR'];
      return isPasswordValid;
    }
    this.verifyError = null;
    return isPasswordValid;
  }  

  error(error: string): void {
    this.verifyError = error;
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  login() {
  }
}
