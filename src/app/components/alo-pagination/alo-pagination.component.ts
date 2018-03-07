import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'alo-pagination',
  templateUrl: './alo-pagination.component.html',
  styleUrls: ['./alo-pagination.component.css']
})
export class AloPaginationComponent implements OnInit {
  @Input() totalPage: number;
  @Input() actualPage: number;
  @Output() pagined: EventEmitter<any>;
  public listPages: Array<number>;

  constructor() {
    this.listPages = [];
    this.totalPage = 1;
    this.actualPage = 1;
    this.pagined = new EventEmitter();
  }

  ngOnInit() {
    this.generateListPages();
  }

  /**
   * Generate an array with totalPage
   */
  private generateListPages(): void {
    for ( let i = 1; i <= this.totalPage; i++ ) {
      this.listPages.push(i);
    }
  }

  /**
   * Emmit the number of the page selected
   * @param {number} page number of page where we want ot navigate
   */
  public paginedNavigation( page: number): void {
    if ( page !== this.actualPage) {
      this.pagined.emit(page);
    }
  }

}
