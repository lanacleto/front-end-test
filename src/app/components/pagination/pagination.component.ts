import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalPages = 1;
  @Input() currentPage = 1;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  changePage(number: number) {
    if(number > this.totalPages || number <= 0 || this.currentPage === number) return
    this.currentPage = number;
    this.onPageChange.emit(number);
  }
}
