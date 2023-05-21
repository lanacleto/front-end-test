import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputType: string;
  @Input() error: string;
  @Input() inputValue = "";
  @Input() placeholder: string;
  @Input() label: string;
  @Input() disabled = false;

  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onInputBlur() {
    if(this.disabled) return;
    this.inputValueChange.emit(this.inputValue);
  }
}