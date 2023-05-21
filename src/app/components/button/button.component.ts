import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() inputType: string;
  @Input() isDisabled = false;
  
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  buttonClicked(event: MouseEvent) {
    if(this.isDisabled) return;
    this.onClick.emit(event);
  }
}
