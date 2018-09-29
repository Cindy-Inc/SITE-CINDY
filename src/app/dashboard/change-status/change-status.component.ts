import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {

  @Output() changeStatus: EventEmitter<number>;

  constructor() {
    this.changeStatus = new EventEmitter<number>();
  }

  change(status) {
    this.changeStatus.emit(status);
  }

  ngOnInit() {
  }

}
