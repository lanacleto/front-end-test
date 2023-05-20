import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputType: string;
  @Input() error: string;
  @Input() placeholder: string;
  constructor() {}
}

// <input [type]="inputType" [placeholder]="placeholder">
// <div class="uk-alert-danger" uk-alert>
//     <a class="uk-alert-close" uk-close></a>
//     <p>{{ error }}</p>
// </div>
