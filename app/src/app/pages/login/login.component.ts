import { Component } from '@angular/core';
import translations from './translations.json';

type Translations = Record<string, Record<string, string>>;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  language = 'pt';
  translations: Translations;
  constructor() {
    this.translations = translations;
  }
}
